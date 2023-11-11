import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-character-dbz',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name:'',
    power:0

  }

  emitCharacter() {
    console.log(this.character);
    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }

}
