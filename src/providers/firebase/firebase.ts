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
  information : any;
  // exercisesAlternative: any;
  // exercisesBuilding: any;
  // exercisesCalisthenics: any;
  // exercisesFitness: any;
  weight: Array<number>;
  height: Array<number>;
  bmi: Array<number>;
  date: Array<string>;
  uid;

  address: Array<string>;
  dob: Array<string>;
  email: Array<string>;
  name: Array<string>;
  phone: Array<string>;
  surname: Array<string>;

  // BBtitle: Array<string>;
  // BBinfo: Array<string>;
  // Atitle: Array<string>;
  // Ainfo: Array<string>;
  // Ctitle: Array<string>;
  // Cinfo: Array<string>;
  // Ftitle: Array<string>;
  // Finfo: Array<string>;

  constructor(public afd: AngularFireDatabase, private afa: AngularFireAuth) {
    this.uid = afa.auth.currentUser.uid;      
    this.weight = [];
    this.bmi = [];
    this.height = [];
    this.date = [];

    this.address = [];
    this.dob = [];
    this.email = [];
    this.name = [];
    this.phone = [];
    this.surname = [];
    // //Body Building
    // this.BBtitle = [];
    // this.BBinfo = [];
    // //Alternatives
    // this.Atitle = [];
    // this.Ainfo = [];
    // //Calisthenics
    // this.Ctitle = [];
    // this.Cinfo = [];
    // //Fitness
    // this.Ftitle = [];
    // this.Finfo = [];

    this.records = this.getRecordsList();
    this.information = this.getUserInfo();
    // //The list population
    // this.exercisesAlternative = this.getExerciseAlternativesList();
    // this.exercisesBuilding = this.getExerciseBodyBuildingList();
    // this.exercisesCalisthenics = this.getExerciseCalisthenicsList();
    // this.exercisesFitness = this.getExerciseFitnessList();

  this.records.subscribe((res) => {
    res.forEach(record => {
      this.weight.push(Number(record.weight));
      this.date.push(record.date);
      this.bmi.push(Number(record.bmi));
      this.height.push(Number(record.height));
    });
  });
  this.information.subscribe((res) => {
    res.forEach(information => {
      this.address.push(information.address);
      this.dob.push(information.dob);
      this.email.push(information.email);
      this.name.push(information.name);
      this.phone.push(information.phone);
      this.surname.push(information.surname);
    });
  });

  // this.exercisesAlternative.subscribe((res) => {
  //   res.forEach(exercise => {
  //     this.Atitle.push(exercise.name);
  //     this.Ainfo.push(exercise.description);
  //   });
  // });
  // this.exercisesBuilding.subscribe((res) => {
  //   res.forEach(build => {
  //     this.BBtitle.push(build.name);
  //     this.BBinfo.push(build.description);
  //   });
  // });
  // this.exercisesCalisthenics.subscribe((res) => {
  //   res.forEach(cal => {
  //     this.Ctitle.push(cal.name);
  //     this.Cinfo.push(cal.description);
  //   });
  // });
  // this.exercisesFitness.subscribe((res) => {
  //   res.forEach(fit => {
  //     this.Ftitle.push(fit.name);
  //     this.Finfo.push(fit.description);
  //   });
  // });

    //console.log(this.records);
    //console.log(this.uid);

    //izoNTsW3p0cVh0vZvOocbRBL1Vx2
    //izoNTsW3p0cVh0vZvOocbRBL1Vx2

    //nuHYLxxEsLfspHfaZywIJqClCSX2
    //nuHYLxxEsLfspHfaZywIJqClCSX2

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

  getAddress() {
    return this.address;
  }
  getDob() {
    return this.dob;
  }
  getEmail() {
    return this.email;
  }
  getName() {
    return this.name;
  }
  getPhone() {
    return this.phone;
  }
  getSurname() {
    return this.surname;
  }
  getLength() {
    return this.surname.length;
  }

  getExerciseAlternativesList() {
    return this.afd.list('/Exercise/Alternatives/');
  }
  getExerciseBodyBuildingList() {
    return this.afd.list('/Exercise/Body Building/');
  }
  getExerciseCalisthenicsList() {
    return this.afd.list('/Exercise/Calisthenics/');
  }
  getExerciseFitnessList() {
    return this.afd.list('/Exercise/Fitness/');
  }
  getUserInfo() {
    return this.afd.list('users/' + this.uid + '/Info/');
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
  // //The Exercise Stuff
  // //Body Building
  // getBBtitle() {
  //   return this.BBtitle;
  // }
  // getBBinfo() {
  //   return this.BBinfo;
  // }
  // //Alternatives
  // getAtitle() {
  //   return this.Atitle;
  // }
  // getAinfo() {
  //   return this.Ainfo;
  // }
  // //Calisthenics
  // getCtitle() {
  //   return this.Ctitle;
  // }
  // getCinfo() {
  //   return this.Cinfo;
  // }
  // //Fitness
  // getFtitle() {
  //   return this.Ftitle;
  // }
  // getFinfo() {
  //   return this.Finfo;
  // }
}
