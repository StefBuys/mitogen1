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

  uid;

  constructor(public afd: AngularFireDatabase, private afa: AngularFireAuth) {
    console.log('Hello FirebaseProvider Provider');
    this.uid = afa.auth.currentUser.uid;      
    //console.log(this.uid);

    //izoNTsW3p0cVh0vZvOocbRBL1Vx2
    //izoNTsW3p0cVh0vZvOocbRBL1Vx2

    //nuHYLxxEsLfspHfaZywIJqClCSX2
    //nuHYLxxEsLfspHfaZywIJqClCSX2

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
