import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeService } from './resize.service';
import { IfViewPortSizeDirective } from './if-view-port-size.directive';

export interface ViewPortInterface {
  small: number;
  medium: number;
  large: number;
}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IfViewPortSizeDirective],
  exports: [IfViewPortSizeDirective],
})
export class IfViewPortSizeModule {

  static forRoot(config: ViewPortInterface): ModuleWithProviders {
    return {
      ngModule: IfViewPortSizeModule,
      providers: [ResizeService, {provide: 'config', useValue: config}]
    };
  }
}
