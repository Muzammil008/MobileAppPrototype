import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensechartPage } from '../expensechart/expensechart';
import { AccountsPage } from '../accounts/accounts';
import { OtpPage } from '../otp/otp';
import { BlockcardPage } from '../blockcard/blockcard';
import { TextinputfocusPage } from '../textinputfocus/textinputfocus';
import { StatementDetailsPage } from '../statement-details/statement-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public gotoExpenseChart(){
    this.navCtrl.push(ExpensechartPage)
  }

  public gotoAccounts(){
    this.navCtrl.push(AccountsPage)
  }
  
  public gotoOTP(){
    this.navCtrl.push(OtpPage)
  }

  public gotoBlockCard(){
    this.navCtrl.push(BlockcardPage)
  }

  public textInputFocus(){
    this.navCtrl.push(TextinputfocusPage)
  }

  public gotoStatementDetails(){
    this.navCtrl.push(StatementDetailsPage);
 
  }

}
