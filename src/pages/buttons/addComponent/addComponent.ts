import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-addComponent',
  templateUrl: 'addComponent.html'
})
export class addComponentPage {
  Title:string;
  myItem:any;
  quantityVar:number = 100;
  quantityUnit:string = "g";
  calories:number;
  carbs:number;
  protein:number;
  fat:number;
  count:number = 1;
  //public title:string = "defualt";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.myItem = this.navParams.get("name");
    this.Title = this.myItem;
  }
  btnAdd(): void {

  }
  btnLess(): void {
    if (this.count>1) {
      this.count--;
    }
  }
  btnMore(): void {
    this.count++;
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
  
}
