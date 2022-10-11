import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interfaces/character';
import { CharacterService } from '../character.service';
 
@Component({
 selector: 'app-edit-character.component.ts',
 templateUrl: 'edit-character.component.html',
})
export class EditCharacterComponent implements OnInit {
  character: BehaviorSubject<Character> = new BehaviorSubject(<Character>{});
 
 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private characterService: CharacterService,
 ) { }
 
 ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
   if (!id) {
     alert('No id provided');
   }
 
   this.characterService.getCharacter(id !).subscribe((character) => {
     this.character.next(character);
   });
 }
 
 editCharacter(character: Character) {
   this.characterService.updateCharacter(this.character.value._id || '', character)
     .subscribe({
       next: () => {
         this.router.navigate(['/characters']);
       },
       error: (error) => {
         alert('Failed to update character');
         console.error(error);
       }
     })
 }
}