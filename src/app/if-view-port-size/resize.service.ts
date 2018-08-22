import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventManager } from '@angular/platform-browser';
import { ViewPortInterface } from './if-view-port-size.module';

export enum ViewPortType {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

@Injectable()
export class ResizeService {

  get onResize$(): Observable<ViewPortType> {
    return this.resizeSubject;
  }

  readonly resizeSubject: BehaviorSubject<ViewPortType>;

  constructor(@Inject('config') private config: ViewPortInterface,
              private eventManager: EventManager) {
    this.resizeSubject = new BehaviorSubject<ViewPortType>(ViewPortType.small);
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
  }

  private onResize(event: UIEvent) {
    const viewPortType = this.getViewPort((<Window>event.target).innerWidth);
    this.resizeSubject.next(viewPortType);
  }

  private getViewPort(width: number): ViewPortType {
    switch (true) {
      case width < this.config.medium: return ViewPortType.small;
      case width >= this.config.large: return ViewPortType.small;
      default:
        return ViewPortType.medium;
    }
  }
}
