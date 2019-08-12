import { ModalPageModule } from './modal/modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { GoogleMaps } from '@ionic-native/google-maps';

import { Camera } from '@ionic-native/camera/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DbService } from '../app/db.service';







@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule],
  providers: [
    Camera,
    SQLite,
    DbService,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
