import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../interfaces/character';
import { CharacterService } from '../character.service';
 
@Component({
 selector: 'app-add-Character',
 templateUrl: 'add-Character.component.html'
})
export class AddCharacterComponent {
 constructor(
   private router: Router,
   private CharacterService: CharacterService
 ) { }
 
 addCharacter(character: Character) {
   this.CharacterService.createCharacter(character)
     .subscribe({
       next: () => {
         this.router.navigate(['/characters']);
       },
       error: (error) => {
         alert("Failed to create Character");
         console.error(error);
       }
     });
 }
}