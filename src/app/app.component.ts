import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'vim-tabs';

  tabs = [];

  constructor() {
    this.addTab();
  }

  removeTab() {
    this.tabs = this.tabs.slice(0, -1);
  }

  addTab() {
    const index = this.tabs.length + 1;
    this.tabs = [ ...this.tabs, {
      title: `Dynamic title ${index}`,
      content: `<h3>Dynamic content ${index}<h3>`
    } ];
  }

}
