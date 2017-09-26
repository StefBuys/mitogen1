import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../../providers/firebase/firebase";

//The button based pages
import { exerciseComponentPage } from '../exerciseComponent/exerciseComponent';

@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html'
})
export class ExercisePage {
  //test
  public title:string[];
  public reps:number[];
  //create
  public value:any;
  practise: any
  public month:string = "September";
  public Title: string = "Today";
  public date = new Date().toLocaleDateString();
  public viewDay:number = Number(this.date.split("/")[1]);
  public viewDate:string = this.date;
  public now:number;
  public view:number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    this.practise = this.firebase.getPractiseList()
  }
  btnBack(){
    var split = this.viewDate.split("/");//mm-dd-yyyy
    var month:number = Number(split[0]);
    this.viewDay = Number(split[1]);
    var year:number = Number(split[2]);
/////////////////TODO - M2K
    this.viewDay--;
    this.viewDate = month+"/"+this.viewDay+"/"+year;
    this.myTitle();  
  }
  btnForeward(){
    var split = this.viewDate.split("/");//mm-dd-yyyy
    var month:number = Number(split[0]);
    this.viewDay = Number(split[1]);
    var year:number = Number(split[2]);
/////////////////TODO - M2K
    this.viewDay++;
    this.viewDate = month+"/"+this.viewDay+"/"+year;
    this.myTitle();  
  }
  myTitle(){
    this.now = Number(this.date.split("/")[1]);
    this.view = Number(this.viewDate.split("/")[1]);
    if (this.now == this.view) {//Today
      this.Title = "Today";
    }
    if (this.now < this.view) {//Future
      this.Title = "Future";
    }
    if (this.now > this.view) {//Past
      this.Title = "Past";
    }
  }
  btnAdd(): void{
    console.log("add");
    this.navCtrl.push(exerciseComponentPage);
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}