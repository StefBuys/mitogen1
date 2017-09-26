import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { AngularFireAuth } from 'angularfire2/auth';

//The button based pages
import { CaloriePage } from '../buttons/calorie/calorie';
import { DisplayPage } from '../buttons/display/display';
import { UpdatePage } from '../buttons/update/update';
import { TracerPage } from '../buttons/tracer/tracer';
import { ExercisePage } from '../buttons/exercise/exercise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController, public modalCtrl: ModalController, public firebase: FirebaseProvider) {
    
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }
  public btnTemp(): void {
    console.log("Temp One");
  }
  public btnExercise(): void {
    console.log("Exercise");
    this.navCtrl.push(ExercisePage);
  }
  public btnTracer(): void {
    console.log("Router Tracer");
    this.navCtrl.push(TracerPage);
  }
  public btnCalorie(): void {
    console.log("Calories");
    this.navCtrl.push(CaloriePage);
  }
  public btnUpdate(): void {
    console.log("Update Progress");
    this.navCtrl.push(UpdatePage);
  }
  public btnDisplay(): void {
    console.log("Display Progress");
    this.navCtrl.push(DisplayPage);
  }
}
