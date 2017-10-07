import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';

//The button based pages
import { AddPage } from '../add/add';

@Component({
  selector: 'page-calorie',
  templateUrl: 'calorie.html'
})
export class CaloriePage {
  public chrono:number = 0;
  public day:number = 14;
  public month:string = "September";
  public Title: string = "Today";
  public BreakfastPerc:number;
  public LunchPerc:number;
  public SupperPerc:number;
  public SnacksPerc:number;
  public TotalCal:number;
  public BreakfastCal:number;
  public LunchCal:number;
  public SupperCal:number;
  public SnacksCal:number;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.display();
  }
  display(): void{
    //Remember to get the date
    this.BreakfastCal = 913;
    this.LunchCal = 693;
    this.SupperCal = 1071;
    this.SnacksCal = 473;
    this.TotalCal = (this.BreakfastCal+this.LunchCal+this.SupperCal+this.SnacksCal);
    this.BreakfastPerc = Math.floor((this.BreakfastCal/this.TotalCal)*100);
    this.LunchPerc = Math.floor((this.LunchCal/this.TotalCal)*100);
    this.SupperPerc = Math.floor((this.SupperCal/this.TotalCal)*100);
    this.SnacksPerc = Math.floor((this.SnacksCal/this.TotalCal)*100);
  }
  btnBack(): void{
    this.chrono--;
    this.day--;
    if(this.chrono == 0){
      this.Title = "Today";
    } else if (this.chrono<0) {
      this.Title = "Past";
    } else if (this.chrono>0) {
      this.Title = "Future";
    }
  }
  btnForeward(): void{
    this.chrono++;
    this.day++;
    if(this.chrono == 0){
      this.Title = "Today";
    } else if (this.chrono<0) {
      this.Title = "Past";
    } else if (this.chrono>0) {
      this.Title = "Future";
    }
  }
  btnAddBreakfast(): void{
    console.log("add Breakfast");
    this.navCtrl.push(AddPage, {myPage: 0});
  }
  btnAddLunch(): void{
    console.log("add Lunch");
    this.navCtrl.push(AddPage, {myPage: 1});
  }
  btnAddSupper(): void{
    console.log("add Supper");
    this.navCtrl.push(AddPage, {myPage: 2});
  }
  btnAddSnacks(): void{
    console.log("add Snacks");
    this.navCtrl.push(AddPage, {myPage: 3});
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}