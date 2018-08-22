import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'tab-title',
  template: `<div (click)="handleClick()">
              <ng-content></ng-content>
            </div>`
})
export class TabTitleComponent {

  @HostBinding('class.active')
  @Input() isActive;

  @Output() select = new EventEmitter<void>();

  handleClick() {
    console.log('click');
    this.select.emit();
  }

}
