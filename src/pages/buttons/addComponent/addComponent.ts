import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from "../../../providers/firebase/firebase";

@Component({
  selector: 'page-addComponent',
  templateUrl: 'addComponent.html'
})
export class addComponentPage {
  foodList: any;
  food: any;
  Title:string;
  myItem:any;
  quantityVar:number = 100;
  quantityUnit:string = "g";
  calories:number;
  carbs:number;
  protein:number;
  fat:number;
  count:number = 1;
  public date = new Date().toLocaleDateString('en-GB');
  //public title:string = "defualt";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public firebase: FirebaseProvider) {
    this.myItem = this.navParams.get("name");
    this.Title = this.myItem;

    this.foodList = this.firebase.getFoodsList();
    this.food = this.firebase.getFoodLog();

    this.food = this.firebase.getFood(this.myItem);
    // console.log(this.food);

    this.food.subscribe((ref) => {
      //console.log(ref);
      ref.forEach(record => {
        switch(record.$key) {
          case "Protein" : this.protein = (Number(record.$value));
          break;
          case "Carbohydrate" : this.carbs = (Number(record.$value));
          break;
          case "Calories" : this.calories = (Number(record.$value));
          break;
          case "Fat" : this.fat = (Number(record.$value));
          break;
        }
      })
    });
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
