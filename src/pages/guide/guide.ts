import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

//The button based pages
import { guideComponentPage } from '../buttons/guideComponent/guideComponent';

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html'
})
export class GuidePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }
  btnBuild(){
    console.log("guide Component");
    this.navCtrl.push(guideComponentPage, {myPage: 0});
  }
  btnFitness(){
    console.log("guide Component");
    this.navCtrl.push(guideComponentPage, {myPage: 1});
  }
  btnCal(){
    console.log("guide Component");
    this.navCtrl.push(guideComponentPage, {myPage: 2});
  }
  btnAlt(){
    console.log("guide Component");
    this.navCtrl.push(guideComponentPage, {myPage: 3});
  }
}
