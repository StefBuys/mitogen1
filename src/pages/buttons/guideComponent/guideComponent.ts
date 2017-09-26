import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-guideComponent',
  templateUrl: 'guideComponent.html'
})
export class guideComponentPage {
  public myPage: number;
  public description: string;
  public header: string;
  public numEntries: number = 4;
  public title:string[] = ["Deadlifts","Dumbell-Press","Squats","Benching"];
  public info:string[] = ["Vertically lifting a weight from the group, used to target back, legs and shoulder, famously used by rugby players","Used to target pecks, lifting around 20kg perhand","Using a bechpress to add a large amount of weights to your squats","Something that you need to have a friend to spot you when you are lifting"]; 
  //public items = [];

  items  = [
    { title: this.title[0],
      info: this.info[0]
    },
    { title: this.title[1],
      info: this.info[1]
    },
    { title: this.title[2],
      info: this.info[2]
    },
    { title: this.title[3],
      info: this.info[3]
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
    this.myPage = this.navParams.get("myPage");
    if(this.myPage == 0){
    this.header = "Body Building";
    this.description = "Body Building - Here will be an explination of what this is and how this works and any other relevent information";
    }
    if(this.myPage == 1){
    this.header = "Fitness";
    this.description = "Fitness - Here will be an explination of what this is and how this works and any other relevent information";
    }
    if(this.myPage == 2){
    this.header = "Callisthenics";
    this.description = "Callisthenics - Here will be an explination of what this is and how this works and any other relevent information";
    }
    if(this.myPage == 3){
    this.header = "Alternative Exercise";
    this.description = "Alternative Exercise - Here will be an explination of what this is and how this works and any other relevent information";
    }
  }
  
  // getUserData() {
  //   var userId = '01';
  //   return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
  //     var username = snapshot.val().username;
  //     //var email = snapshot.val().email;
  //   });
  // }
  
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}
