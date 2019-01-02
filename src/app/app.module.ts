import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlockcardPage } from '../pages/blockcard/blockcard';
import { AccountsPage } from '../pages/accounts/accounts';
import { ExpensechartPage } from '../pages/expensechart/expensechart';
import { OtpPage } from '../pages/otp/otp';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlockcardPage,
    AccountsPage,
    OtpPage,
    ExpensechartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlockcardPage,
    AccountsPage,
    OtpPage,
    ExpensechartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
