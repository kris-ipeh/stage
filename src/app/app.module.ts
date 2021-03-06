import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { RamassagePage } from '../pages/ramassage/ramassage';
import { EchangePage } from '../pages/echange/echange';
import { InventairePage } from '../pages/inventaire/inventaire';
import { TabsPage } from '../pages/tabs/tabs';
import { SignatureModalPage } from '../pages/signature-modal/signature-modal';

// Native components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import {} from '@types/googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

// AngulireFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Connexion Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDP8kdmMVaJ_HY6XZu75AsKcWnAaiTdAN8",
  authDomain: "etcheverry-hariscain.firebaseapp.com",
  databaseURL: "https://etcheverry-hariscain.firebaseio.com",
  storageBucket: "etcheverry-hariscain.appspot.com",
  messagingSenderId: '1053939384333'
};

// Services
import { Loader } from '../providers/loader/loader'
import { UtilisateurProvider } from '../providers/utilisateur/utilisateur';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ClientSearchComponent } from '../components/client-search/client-search';
import { ChauffeursComponent } from '../components/chauffeurs/chauffeurs';
import { NewClientComponent } from '../components/new-client/new-client';
import { GoogleMapComponent } from '../components/google-map/google-map';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    RamassagePage,
    EchangePage,
    InventairePage,
    TabsPage,
    SignatureModalPage,
    Loader,
    ClientSearchComponent,
    ChauffeursComponent,
    NewClientComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SignaturePadModule,
    AngularFireOfflineModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    RamassagePage,
    EchangePage,
    InventairePage,
    TabsPage,
    SignatureModalPage,
    ClientSearchComponent,
    ChauffeursComponent,
    NewClientComponent,
    GoogleMapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,
    Loader,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilisateurProvider,
    Geolocation,
    GoogleMaps
  ]
})
export class AppModule {}
