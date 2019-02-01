import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProfilePage} from '../pages/profile/Profile';
import { SettingsPage } from '../pages/settings/settings';
import { MedicineReminderPage } from '../pages/medicine/medicine';
import {BlogPage } from '../pages/blog/blog';
import {LogOutPage } from '../pages/log-out/log-out';

@Component({ templateUrl: 'app.html'})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
   
    // used for an example of ngFor and navigation
    this.pages = [
      
       { title :'Home', component: HomePage, icon: 'home' } ,
      { title: 'profile', component: ProfilePage, icon: 'person' },
      { title: 'Medicine Reminder', component: MedicineReminderPage, icon: 'ios-notifications' },
      { title: 'Blog', component: BlogPage, icon: 'ios-pulse' },
      { title: 'settings', component: SettingsPage, icon: 'settings' },
      { title: 'log-out', component: LogOutPage, icon: 'md-log-in'}
    ];
    
   
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    console.log('clicked', page)
    this.nav.setRoot(page.component);
  }
}
