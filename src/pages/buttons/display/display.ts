import { Component, ViewChild } from '@angular/core';
import {NavController, ViewController, NavParams  } from 'ionic-angular';
import {FirebaseProvider} from '../../../providers/firebase/firebase';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {
  barChart:any;
  records:any;
  // weight:number[] = [72, 76, 77,79, 80, 77, 75];
  // date:string[] = ["9/5/2017", "9/7/2017", "9/9/2017", "9/11/2017", "9/13/2017", "9/14/2017", "9/16/2017"];
  // height:number[] = [1.82,1.82,1.82,1.82,1.82,1.82,1.82,1.82];
  // bmi:number[] = [22.34,22.94,23.24,23.85,24.15,23.25,22.64];

  weight : Array<number>;
  date : Array<string>;
  height : Array<number>;
  bmi : Array<number>;

  // weight:number[] = []
  // date:string[] = []
  // height:number[] = []
  // bmi:number[] = []

	@ViewChild('lineWeight') canvasWeight;
	@ViewChild('lineBMI') canvasBMI;
	@ViewChild('lineHeight') canvasHeight;
  lineWeight: any;
  lineBMI: any;
  lineHeight: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public NavParams: NavParams, public firebase: FirebaseProvider) {
    this.weight = [];
    this.date = [];
    this.height = [];
    this.bmi = [];
    // get exercise list from firebase
    this.weight = this.firebase.getWeight();
    this.height = this.firebase.getHeight();
    this.bmi = this.firebase.getBmi();
    this.date = this.firebase.getDate();

    // this.records.subscribe((res) => {
    //     res.forEach(record => {
    //       this.weight.push(Number(record.weight));
    //       this.date.push(record.date);
    //       this.bmi.push(Number(record.bmi));
    //       this.height.push(Number(record.height));
    //     });
    // });

      // this.records
      // .map((res) => {
      //   res.forEach(record => {
      //     this.weight.push(Number(record.weight))
      //     this.date.push(record.date)
      //     this.bmi.push(Number(record.bmi))
      //     this.height.push(Number(record.height))
      //   })
      // }).subscribe()
  }

	ngOnInit() {
    this.drawGraphs();
  }

  drawGraphs() {
    this.lineWeight = new Chart(this.canvasWeight.nativeElement, {
      type: 'line',
        data: {
          labels: this.date,
            datasets: [{
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

    this.lineBMI = new Chart(this.canvasBMI.nativeElement, {
      type: 'line',
        data: {
          labels: this.date,
            datasets: [{
              label: "BMI",
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
              data: this.bmi,
              spanGaps: false,
            }
          ]
        }
    });

    this.lineHeight = new Chart(this.canvasHeight.nativeElement, {
      type: 'line',
        data: {
          labels: this.date,
            datasets: [{
              label: "Height",
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
              data: this.height,
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
