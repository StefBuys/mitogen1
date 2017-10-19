import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { GuidePage } from '../pages/guide/guide';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//The button based pages
import { CaloriePage } from '../pages/buttons/calorie/calorie';
import { DisplayPage } from '../pages/buttons/display/display';
import { MapPage } from '../pages/buttons/map/map';
import { AddPage } from '../pages/buttons/add/add';
import { UpdatePage } from '../pages/buttons/update/update';
import { TracerPage } from '../pages/buttons/tracer/tracer';
import { guideComponentPage } from '../pages/buttons/guideComponent/guideComponent';
import { ExercisePage } from '../pages/buttons/exercise/exercise';
import { exerciseComponentPage } from '../pages/buttons/exerciseComponent/exerciseComponent';
import { addComponentPage } from '../pages/buttons/addComponent/addComponent';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AccountsPage } from '../pages/buttons/account/account';
//import { subaccountsPage } from '../pages/buttons/subaccounts/subaccounts';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyC2AVQql8A1zvh8XaY59l43Tdj2rBOc08Q",
  authDomain: "mitogen-7d2a9.firebaseapp.com",
  databaseURL: "https://mitogen-7d2a9.firebaseio.com",
  projectId: "mitogen-7d2a9",
  storageBucket: "mitogen-7d2a9.appspot.com",
  messagingSenderId: "1090828191593"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    GuidePage,
    ContactPage,
    HomePage,
    TabsPage,
    CaloriePage,
    DisplayPage,
    MapPage,
    AddPage,
    UpdatePage,
    TracerPage,
    guideComponentPage,
    ExercisePage,
    exerciseComponentPage,
    addComponentPage,
    AccountsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    GuidePage,
    ContactPage,
    HomePage,
    TabsPage,
    CaloriePage,
    DisplayPage,
    MapPage,
    AddPage,
    UpdatePage,
    TracerPage,
    guideComponentPage,
    ExercisePage,
    exerciseComponentPage,
    addComponentPage,
    AccountsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
