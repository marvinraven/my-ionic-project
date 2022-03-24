import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  fetchInterval: any;
  countSpam: number = 0;


  constructor(public menuCtrl: MenuController) {}

  spamMenu(): void {
    this.fetchInterval = setInterval(async () => {
      if (this.countSpam < 1000) {
        console.log(`# of iterations without a crash: ${this.countSpam}`);
        this.menuCtrl.isOpen() ? this.menuCtrl.close() : this.menuCtrl.open();
      } else this.fetchInterval = undefined;
      this.countSpam++;
    }, 100);
  }
}
