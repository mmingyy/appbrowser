import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private iab: InAppBrowser,) {}
  
  openWebpage(){
    const url = 'http://dolearn.co.kr/';

    const options: InAppBrowserOptions = {
      zoom: 'yes'
    }
    //opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url,'_self',options);
  }
}
