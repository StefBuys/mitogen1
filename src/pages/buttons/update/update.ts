import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { FirebaseProvider } from "../../../providers/firebase/firebase";

@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {
  //public count: number = 0;
  public weight: string = '';
  public height: string = '';s
  public bmi: string = '';
  public date = new Date().toLocaleDateString();
  //Created Variables
  records: any
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    // get updates list from firebase
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
    if (this.bmi != '' && this.date != '' && this.height != '' && this.weight != '') {
      var input:any = {bmi: this.bmi, date: this.date, height: this.height, weight: this.weight};
      this.records.push(input);
    }
    //this.count = this.records.length;
  }
  btnReturn(): void{
    //console.log("return");
    this.viewCtrl.dismiss();
  }
}
