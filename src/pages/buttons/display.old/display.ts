import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, ViewController, NavParams  } from 'ionic-angular';
import {FirebaseProvider} from "../../../providers/firebase/firebase";
import { Chart } from 'chart.js';
@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {
  barChart:any;
  records:any;
  weight:number[] = [74, 76, 77,79, 80, 77, 75];
  date:string[] = ["9/5/2017", "9/7/2017", "9/9/2017", "9/11/2017", "9/13/2017", "9/14/2017", "9/16/2017"];
  height:number[] = [1.82,1.82,1.82,1.82,1.82,1.82,1.82,1.82];
  bmi:number[] = [22.34,22.94,23.24,23.85,24.15,23.25,22.64];
	@ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public NavParams: NavParams,
              public firebase: FirebaseProvider) {
    // get exercise list from firebase
    this.records = this.firebase.getRecordsList()
    // this.weight = [];
    // this.height = [];
    // this.bmi = [];
     for (let r of this.records){
       this.weight.push((r.weight));
       this.height.push(Number(r.height));
       this.bmi.push(Number(r.bmi));
       console.log(r.weight);
     }
  //  let i:any;
  //    for (let r of this.records){
  //      this.weight[i] = (Number(r.weight));
  //      console.log(this.weight[i]);
  //      i++;
    //   this.height.push(Number(r.height));
    //   this.bmi.push(Number(r.bmi));
    // }
  }
	ionViewDidLoad() {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              label: "Weight",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.weight,
              spanGaps: false,
            }
          ]
        }
    });
  }
  btnReturn(): void{
    console.log("return");
    this.viewCtrl.dismiss();
  }
}