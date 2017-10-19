import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from "../../../providers/firebase/firebase";

//The button based pages
//import { accountsComponentPage } from '../accountsComponent/accountsComponent';

@Component({
  selector: 'page-accounts',
  templateUrl: 'account.html'
})
export class AccountsPage {
  //Created Variables
  info: any
  records: any

  public addressArr: Array<string> = this.firebase.getAddress();
  public dobArr: Array<string> = this.firebase.getDob();
  public emailArr: Array<string> = this.firebase.getEmail();
  public nameArr: Array<string>
  public phoneArr: Array<string> = this.firebase.getPhone();
  public surnameArr: Array<string> = this.firebase.getSurname();

  public name: string = ''//
  public surname: string = ''//
  public dob: string = ''//change to date format
  public height: string = ''//
  public weight: string = ''//
  public phone: string = ''//
  public email: string = ''//
  public address: string = ''//
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public firebase: FirebaseProvider) {
    // get accounts list from firebase

    this.nameArr = this.firebase.getName();
    console.log(this.firebase.getName());
    this.info = this.firebase.getUserInfo()
    this.records = this.firebase.getRecordsList()
    this.name = this.nameArr.pop[0];//
    this.surname = this.surnameArr[this.surnameArr.length-1]//
    this.dob = this.dobArr[this.dobArr.length-1]//change to date format
    this.height = ''//
    this.weight = ''//
    this.phone = this.phoneArr[this.phoneArr.length-1]//
    this.email = this.emailArr[this.emailArr.length-1]//
    this.address = this.addressArr[this.addressArr.length-1]//
    
  }
  input(){
    //runs as textbox is edited
  }
  btnUpdate(): void{
    console.log("Update");
    var input:any = {name: this.name, surname: this.surname, dob: this.dob, phone: this.phone, email: this.email, address: this.address};
    this.info.push(input);
  }
  btnReturn(): void{
    console.log("return");
    console.log(this.nameArr);
    console.log(this.firebase.getName());
    console.log(this.nameArr[this.nameArr.length-1]);
    console.log(this.name);
    this.name = this.nameArr[this.nameArr.length-1]
    //this.viewCtrl.dismiss();
  }
}