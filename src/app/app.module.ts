import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlockcardPage } from '../pages/blockcard/blockcard';
import { AccountsPage } from '../pages/accounts/accounts';
import { ExpensechartPage } from '../pages/expensechart/expensechart';
import { OtpPage } from '../pages/otp/otp';
import { TextinputfocusPage } from '../pages/textinputfocus/textinputfocus';
import { StatementDetailsPage } from '../pages/statement-details/statement-details';

// Pipes
import { SearchPipe } from '../pipes/search/search';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlockcardPage,
    AccountsPage,
    OtpPage,
    ExpensechartPage,
    TextinputfocusPage,
    StatementDetailsPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlockcardPage,
    AccountsPage,
    OtpPage,
    ExpensechartPage,
    TextinputfocusPage,
    StatementDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
