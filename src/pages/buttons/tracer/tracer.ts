import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';

//The button based pages
import { MapPage } from '../map/map';

@Component({
  selector: 'page-tracer',
  templateUrl: 'tracer.html'
})
export class TracerPage {
  public unit: string = "metric";
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    
  }
  btnLog(): void{
    
  }
  btnUnits(): void{
    if (this.unit == "metric") {
      this.unit="imperial";
    } else if (this.unit == "imperial"){
      this.unit="metric";
    }
  }
  btnStart(): void{
    console.log("map page");
    this.navCtrl.push(MapPage);
    //modal.present();
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}
