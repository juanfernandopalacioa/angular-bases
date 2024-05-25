import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string= 'IronMan';
public age:number=45;
get capitalizedName():string{
  return this.name.toUpperCase();
  }
  getHeroDescription():string {
return `${this.name}-${this.age}`;

  }

public  chanceHero():void{
this.name='SpiderMan'

  }

  public chanceAge():void{
    this.age=89

  }
  resetForm():void{
    this.name='ironman'
    this.age=45
  }


}
