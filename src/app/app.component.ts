import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { FeedbackPage } from '../pages/feedback/feedback';
import { LogoutPage } from '../pages/logout/logout';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  public image;
  pages: Array<{title: string, component: any, icon:string}>;
  public first_name;
  public user_email;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events:Events,private fcm: FCM) {
    this.initializeApp();
    this.events.subscribe('user:created', (user, time) => {
      this.image = user.profile_image;
      this.first_name = user.first_name;
      this.user_email = user.user_email;
      
      console.log('event'+JSON.stringify(user));
     });
     if(this.image == ''|| this.image == undefined){
       this.image = "assets/imgs/No1.png";
      }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:"ios-home-outline" },
      { title: 'Search Profile', component: SearchPage,icon:"ios-search-outline" },
      { title: 'Update Profile', component: UpdateprofilePage,icon:"ios-sync-outline" },
      { title: 'B&A Reminders', component: ListPage,icon:"ios-calendar-outline" },
      { title: 'Feedback', component: FeedbackPage,icon:"ios-list-box-outline" },
      { title: 'Logout', component: LogoutPage,icon:"ios-log-out-outline" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      //Notifications
     this.fcm.subscribeToTopic('all');
      this.fcm.getToken().then(token=>{
          console.log(token);
      })
      this.fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      this.fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      });
      //end notifications.
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      setTimeout(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    },30000);
    });
  }
  // 


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
