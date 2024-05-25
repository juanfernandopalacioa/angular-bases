import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames:string[]=['Spiderman','IronMan','Hulk','She','Thor','Chavo','Chapulin'];

public deleteHero?:string;
  removeLastHeroe():void{
this.deleteHero = this.heroNames.pop();

}
}
