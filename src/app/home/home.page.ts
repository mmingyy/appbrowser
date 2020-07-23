import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // constructor(private iab: InAppBrowser,) {
  // }

  subscribe:any;
  constructor(private iab: InAppBrowser,public platform:Platform) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "HomePage"){
        if(window.confirm("exit app?")){
          navigator["app"].exitapp();
        }
      }
    });
  }
  
  openWebpage(){
    const url = 'http://dolearn.co.kr/';

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    //opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url,'_self',options);
  }
}
