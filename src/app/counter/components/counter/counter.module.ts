import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
@NgModule({

declarations:[
CounterComponent ], exports:[CounterComponent],imports: [CommonModule],
}
)


export class CounterModule{}
