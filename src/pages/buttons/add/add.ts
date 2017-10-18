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

  //Object Instantiation
  items : Array<string>;
  myObs : Array<string>;
  public myPage;
  public Title:string;
  foods: any
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public firebase: FirebaseProvider, public af: AngularFireDatabase) {
    this.myPage = this.navParams.get("myPage");
    this.items = [];
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
    this.foods = this.firebase.getFoodsList();

    this.foods.subscribe(thing => {
      this.foods.forEach(thing => {
          for(let f of thing) {
            this.myObs.push(f.$key.toString());
          }
      });
    });    
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = this.myObs;
  }

  btnAdd(): void{
    console.log("add");
  }

  openButton(i){
    var input = i;
    this.navCtrl.push(addComponentPage, {name: input});
  }

  getItems(mySearch: any) {
    this.setItems();
    var input = mySearch.target.value;
    console.log(input);
    if (input && input.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
  }

  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
  
}
