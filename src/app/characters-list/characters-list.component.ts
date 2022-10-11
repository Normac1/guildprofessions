import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { Observable } from 'rxjs';
import { CharacterService } from '../character.service';
import { Character } from '../interfaces/character';
 
@Component({
 selector: 'app-characters-list',
 templateUrl: 'characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
 characters$: Observable<Character[]> = new Observable();
 
 constructor(private charactersService: CharacterService) { }
 
 ngOnInit(): void {
   this.fetchCharacters();
 }
 
 deleteCharacter(id: string): void {
   this.charactersService.deleteCharacter(id).subscribe({
     next: () => this.fetchCharacters()
   });
 }
 
 private fetchCharacters(): void {
   this.characters$ = this.charactersService.getCharacters();
 }
}