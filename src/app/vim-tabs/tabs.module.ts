import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabContentComponent } from './tab-item/tab-content/tab-content.component';
import { TabTitleComponent } from './tab-item/tab-title/tab-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsComponent,
    TabItemComponent,
    TabContentComponent,
    TabTitleComponent
  ],
  exports: [
    TabsComponent,
    TabItemComponent,
    TabContentComponent,
    TabTitleComponent
  ]
})
export class TabsModule {
}
