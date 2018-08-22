import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ResizeService, ViewPortType } from './resize.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewPortSizeDirective  implements OnInit, OnDestroy {

  @Input() ifViewportSize: ViewPortType;
  changeViewPortSubscriber: Subscription;

  constructor(private resizeService: ResizeService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef
  ) {
    this.changeViewPortSubscriber = resizeService.onResize$.subscribe(
      (viewPortType: ViewPortType) => this.renderContent(this.ifViewportSize === viewPortType)
    );
  }

  ngOnInit() {
    this.renderContent(this.resizeService.resizeSubject.getValue() === this.ifViewportSize);
  }

  ngOnDestroy() {
    this.changeViewPortSubscriber.unsubscribe();
  }

  renderContent(isShow: boolean) {
    if (isShow) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

  }
}