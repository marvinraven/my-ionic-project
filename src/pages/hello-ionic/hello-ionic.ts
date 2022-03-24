import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  fetchInterval: any;


  constructor(public menuCtrl: MenuController) {}

  spamMenu(): void {
    let countSpam = 0;
    this.fetchInterval = setInterval(async () => {
      if (countSpam < 500) {
        this.menuCtrl.isOpen() ? this.menuCtrl.close() : this.menuCtrl.open();
      } else {
        this.fetchInterval = undefined;
      }
      countSpam++;
    }, 200);
  }
}
