import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { FirebaseProvider } from "../../../providers/firebase/firebase";

@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {
  public count: number = 0;
  public weight: string = '';
  public height: string = '';
  public bmi: string = '';
  public date = new Date().toLocaleDateString();
  //Created Variables
  records: any
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    // get exercise list from firebase
    this.records = this.firebase.getRecordsList()
  }
  
  openButton(r){
    var entry = r;//The whole object
    //add it to DB
    this.weight = entry.weight;
    this.height = entry.height;
    this.bmi = entry.bmi;
  }
  input(){
    this.bmi = Math.round(Number(this.weight)/Math.pow(Number(this.height),2)*100)/100+"";
  }
  btnLog(): void{
    var input:any = {bmi: this.bmi, date: this.date, height: this.height, weight: this.weight};
    this.records.push(input);
    this.count = this.records.length;
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}
