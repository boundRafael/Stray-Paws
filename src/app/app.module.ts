import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation';

import {Database} from '@ionic/cloud-angular';


 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps} from '@ionic-native/google-maps';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'rafaelcarrillo09@gmail.com'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraPage
  ],
  imports: [
     IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
     IonicStorageModule.forRoot({
      name: 'MyApp ',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraPage
  ],
  providers: [
    Geolocation,
    Camera,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Storage
  ]
})
export class AppModule {}
