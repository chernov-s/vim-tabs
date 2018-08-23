import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventManager } from '@angular/platform-browser';
import { ViewPortInterface } from './if-view-port-size.module';

export enum ViewPortType {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

@Injectable()
export class ResizeService {

  readonly resizeSubject$ = new BehaviorSubject<ViewPortType>(null);

  constructor(@Inject('config') private config: ViewPortInterface,
              private eventManager: EventManager) {
    this.eventManager.addGlobalEventListener(
      'window', 'resize', this.onResize.bind(this));
    this.onResize();
  }

  private onResize() {
    const viewPortType = this.getViewPort(window.innerWidth);
    this.resizeSubject$.next(viewPortType);
  }

  private getViewPort(width: number): ViewPortType {
    switch (true) {
      case width < this.config.medium: return ViewPortType.small;
      case width <= this.config.large: return ViewPortType.medium;
      default:
        return ViewPortType.large;
    }
  }
}
