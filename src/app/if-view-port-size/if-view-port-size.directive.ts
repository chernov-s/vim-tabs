import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ResizeService, ViewPortType } from './resize.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewPortSizeDirective  implements OnInit, OnDestroy {

  @Input() ifViewportSize: ViewPortType;

  directiveDestroyed$: Subject<boolean> = new Subject();
  private isRendered = false;

  constructor(private resizeService: ResizeService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.resizeService.resizeSubject$.pipe(
      takeUntil(this.directiveDestroyed$)
    ).subscribe(
      (viewPortType: ViewPortType) => {
        this.renderContent(viewPortType);
      }
    );
  }

  ngOnDestroy() {
    this.directiveDestroyed$.next(true);
    this.directiveDestroyed$.complete();
  }

  renderContent(viewPortType: ViewPortType) {
    if (this.ifViewportSize !== viewPortType) {
      this.viewContainer.clear();
      this.isRendered = false;
      return;
    }
    if (!this.isRendered) {
      this.isRendered = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
