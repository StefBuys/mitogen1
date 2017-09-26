import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { addComponentPage } from '../addComponent/addComponent';
import { FirebaseProvider } from "../../../providers/firebase/firebase";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  //Test Variables
  public test:string = "why";
  public food:string[]; // = ["cheese","apple","sock","ham","chicken","cabbage","milk","rusk"];
  //public message:string[] = ["Dairy","Fruit","Underwear","Swine","Foul","Gross","Dairy",];

  //Object Instantiation
  public myObs = [{title: ""}];
  public myPage;
  public Title:string;
  //public myObs = [""];
  foods: any
  //public title:string = "defualt";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public firebase: FirebaseProvider, public af: AngularFireDatabase) {
    this.myPage = this.navParams.get("myPage");
    this.myObs = [];
    if (this.myPage == 0) {
      this.Title = "Breakfast";
    }
    if (this.myPage == 1) {
      this.Title = "Lunch";
    }
    if (this.myPage == 2) {
      this.Title = "Supper";
    }
    if (this.myPage == 3) {
      this.Title = "Snack";
    }
    this.foods = this.firebase.getFoodsList()
    //  for (let i in this.foods) {
    //  // var input = {title: this.food[i], message: this.message[i]};
    //     var input = {title: this.foods[i]};
    //     console.log(input.title);
    //     this.myObs.push(input);
    //  }
    //console.log(this.foods.$ref.child.key);
    
  }

  btnAdd(): void{
    console.log("add");
  }

  openButton(i){
   // var input;
    //input = i.$key.toString();
    // for (let i in this.Title) {
    var input = {title: i.$key.toString()};
    this.myObs.push(input);
    // }
    //console.log(this.myObs[i]);
    this.navCtrl.push(addComponentPage, {name: input.title});
  }

  populateArray(){

  }

  getItems(mySearch: any): void {
    var input = mySearch.target.value;
    if (input && input.trim() != '') {
      this.myObs = this.myObs.filter((item) => {
        return (item.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
      })
    }
  }

  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
  
}
