import { Component, ViewChild } from '@angular/core';
import { App, Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { UserData } from '../providers/user-data';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SchedulePage } from '../pages/schedule/schedule';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GiftsPage } from '../pages/gifts/gifts';
import { ServiceProvidersPage } from '../pages/service-providers/service-providers';
import { AboutPage } from '../pages/about/about';
import { FAQsPage } from '../pages/faqs/faqs';
import { MomentsPage } from '../pages/moments/moments';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LandingPage;
  pages: Array<{title: string, component: any}>;
  menuPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private ionicAuth: Auth,
    public user: User,
    public userData: UserData) {
    this.initializeApp();

    this.pages = [
      { title: 'Home Page', component: HomePage },
      { title: 'Tabs Page', component: TabsPage },
      { title: 'Settings Page', component: SettingsPage },
      { title: 'Landing Page', component: LandingPage },
      { title: 'Schedule Page', component: SchedulePage },
      { title: 'Login Page', component: LoginPage },
      { title: 'Register Page', component: RegisterPage},
      { title: 'About Page', component: AboutPage},
      { title: 'FAQs Page', component: FAQsPage},
      { title: 'Moments Page', component: MomentsPage }
    ];

    this.menuPages = [
      { title: 'New Mom Care Plan', component: TabsPage },
      { title: 'Schedule', component: SchedulePage },
      { title: 'Service Providers', component: ServiceProvidersPage },
      { title: 'Gifts', component: GiftsPage },
      { title: 'Moments', component: MomentsPage },
      { title: 'FAQs', component: FAQsPage},
      { title: 'About', component: AboutPage},
      { title: 'Logout', component: LoginPage },

    ];  }

  initializeApp() {
    this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    });
  }

  openPage(page) {
      // close the menu when clicking a link from the menu
      console.log(page.component);
    this.menu.close();
    // navigate to the new page if it is not the current page
    if (page == "Logout") { // THIS IF STATEMENT IS POINTLESS BECAUSE IT DOESN'T WORK
      this.userData.logout();
      this.ionicAuth.logout();
      window.location.reload();
      this.nav.setRoot(LandingPage);
    } else{
      console.log(page.component);
      this.nav.setRoot(page.component);
    }
  }
}
