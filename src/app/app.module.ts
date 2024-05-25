import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/components/hero/heroes.module';
import{ListModule} from './heroes/components/list/list.module';
import { CounterModule } from './counter/components/counter/counter.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule, ListModule,CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
