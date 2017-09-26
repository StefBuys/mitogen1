import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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
  }
  getExerciseList() {
    return this.afd.list('/Exercise/');
  }
  getRecordsList() {
    return this.afd.list('/Records/');
  }
  getFoodsList() {
    return this.afd.list('/Food/');
  }
  getPractiseList() {
    return this.afd.list('/Practise/');
  }
}
