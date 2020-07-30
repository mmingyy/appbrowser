import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {Platform, ToastController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // constructor(private iab: InAppBrowser,) {
  // }
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private platform: Platform,
    private toastCtrl: ToastController,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar

  ) {
      // in-app-browser 생성
      const options: InAppBrowserOptions = {
        zoom: 'no',
        location: 'no',
        toolbar: 'no',
        hideurlbar: 'yes'
      }

      // const browser = this.iab.create('http://dolearn.co.kr', '_system', 'location=no, hideurlbar=yes, toolbar=no');
      const browser = this.iab.create('http://dolearn.co.kr', '_self', 'location=no, hideurlbar=yes, toolbar=no');
  }


  // subscribe:any;
  // constructor(private iab: InAppBrowser,public platform:Platform) {
  //   this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
  //     if(this.constructor.name == "HomePage"){
  //       if(window.confirm("exit app?")){
  //         navigator["app"].exitApp(); //.exitapp()
  //       }
  //     }
  //   });
  // }
  
  // openWebpage(){
  //   const url = 'http://dolearn.co.kr/';

  //   const options: InAppBrowserOptions = {
  //     zoom: 'no'
  //   }
  //   //opening a URL and returning an InAppBrowserObject
  //    const browser = this.iab.create(url,'_self',options);
  //   //const browser = this.iab.create(url,'_system',options);
  // }
}
