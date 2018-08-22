import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabTitleComponent } from './tab-title/tab-title.component';

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html'
})
export class TabItemComponent implements OnDestroy, AfterContentInit {

  @Input()
  get isActive() {
    return this._isActive;
  }
  set isActive(active: boolean) {
    if ( active === this._isActive) {
      return;
    }
    this._isActive = active;
    this.title.first.isActive = this.content.first.isActive = active;
  }

  @Output() select = new EventEmitter<TabItemComponent>();
  @Output() removed = new EventEmitter<TabItemComponent>();

  @ContentChildren(TabContentComponent) content: QueryList<TabContentComponent>;
  @ContentChildren(TabTitleComponent) title: QueryList<TabTitleComponent>;

  private _isActive = false;

  constructor() { }

  ngAfterContentInit() {
    this.title.first.select.subscribe( () => {
      this.isActive = true;
      this.select.emit(this);
    });
  }

  ngOnDestroy() {
    this.removed.emit();
  }
}
