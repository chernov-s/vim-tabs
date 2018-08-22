import { AfterContentInit, Component, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'vim-tabs',
  template: '<ng-content></ng-content>'
})
export class TabsComponent implements OnDestroy, AfterContentInit {

  @ContentChildren(TabItemComponent) tabs: QueryList<TabItemComponent>;
  subscribers = [];
  currentTabIndex = 0;

  ngAfterContentInit(): void {
    this.init();
    this.tabs.first.isActive = true;
    this.tabs.changes.subscribe(() => {
      console.log('HAS_CHANHCES');
      this.init();
    });
  }

  init() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
    this.tabs.forEach((tab, index) => {
      this.addTabSubscribe(tab, index);
    });
  }

  private addTabSubscribe(tab: TabItemComponent, index: number) {
    const subscriberSelect = tab.select.subscribe(() => {
      if (this.currentTabIndex !== index) {
        this.tabs.toArray()[this.currentTabIndex].isActive = false;
        this.currentTabIndex = index;
        tab.isActive = true;
      }
    });
    const subscriberRemoved = tab.removed.subscribe(() => {
      console.log('REMOVED');
      if (this.currentTabIndex === index) {
        this.tabs.first.isActive = true;
        this.currentTabIndex = 0;
      }
    });
    this.subscribers.push(subscriberSelect);
    this.subscribers.push(subscriberRemoved);
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
}
