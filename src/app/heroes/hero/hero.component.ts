import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getheroDesciption():string{
    return `${ this.name } - ${ this.age }`
  }

  changeheroName(value:string):void{
    this.name = value;

  }

  changeheroAge(value:number):void{
    this.age = value;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
