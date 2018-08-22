import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from './vim-tabs/tabs.module';
import { IfViewPortSizeModule } from './if-view-port-size/if-view-port-size.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    IfViewPortSizeModule.forRoot({
      small: 480,
      medium: 768,
      large: 960
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
