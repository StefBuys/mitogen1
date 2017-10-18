import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database'; //FirebaseListObservable
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {



  records : any;
  weight: Array<number>;
  height: Array<number>;
  bmi: Array<number>;
  date: Array<string>;

  foodLog: any;

  uid: any;


  constructor(public afd: AngularFireDatabase, private afa: AngularFireAuth) {
    console.log('FirebaseProvider');
    this.uid = afa.auth.currentUser.uid;      
    this.weight = [];
    this.bmi = [];
    this.height = [];
    this.date = [];

    this.records = this.getRecordsList();

    this.records.subscribe((res) => {
      res.forEach(record => {
        console.log(record);
        this.weight.push(Number(record.weight));
        this.date.push(record.date);
        this.bmi.push(Number(record.bmi));
        this.height.push(Number(record.height));
      });
  });

  }

  getWeight() {
    return this.weight;
  }
  getHeight() {
    return this.height;
  }
  getDate() {
    return this.date;
  }
  getBmi() {
    return this.bmi;
  }

  getFood(food: any){
    return this.afd.list('/Food/' + food + '/');
  }

  getExerciseList() {
    return this.afd.list('/Exercise/');
  }
  getRecordsList() {
    return this.afd.list('users/' + this.uid + '/Records/');
  }
  getFoodsList() {
    return this.afd.list('/Food/');
  }
  getFoodLog() {
    return this.afd.list('users/' + this.uid + '/FoodLog/');
  }
  getPractiseList() {
    return this.afd.list('users/' + this.uid + '/Practise/');
  }
}
