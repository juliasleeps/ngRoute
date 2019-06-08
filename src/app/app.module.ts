import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { RouteModule } from './route/route.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
