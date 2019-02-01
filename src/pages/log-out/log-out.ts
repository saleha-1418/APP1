import { Component } from '@angular/core';
import { NavController, NavParams }  from 'ionic-angular';

@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html',
})
export class LogOutPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  
  this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  'american-football', 'boat', 'bluetooth', 'build'];

  this.items = [];
  for (let i = 1; i < 11; i++) {
    this.items.push({
      title: 'Item ' + i,
      note: 'This is item #' + i,
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogOutPage ');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push( LogOutPage  , {
      item: item
    
    });
  }
}