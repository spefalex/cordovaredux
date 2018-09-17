import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AcceuilPage} from '../pages/acceuil/acceuil';

import {userReducer} from "../Interface/User/user.reducer";
import {StoreModule} from "@ngrx/store";
import { StorageService } from '../Interface/Services/storage-service';
import {UserService} from "../Interface/User/user.service";
import {UserEffects} from "../Interface/User/user.effects";
import {EffectsModule} from "@ngrx/effects";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcceuilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(<any>{userState: userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcceuilPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
