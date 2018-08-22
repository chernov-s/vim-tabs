import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `<div *ngIf="isActive">
                <ng-content></ng-content>
              </div>`
})
export class TabContentComponent {

  @Input() isActive = false;

}
