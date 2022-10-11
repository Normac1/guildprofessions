import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interfaces/character';
import { ProfessionName, ProfessionSpecialization } from '../interfaces/profession';
 
@Component({
 selector: 'app-character-form',
 templateUrl: 'character-form.component.html',
 styles: [
   `.character-form {
     max-width: 560px;
     margin-left: auto;
     margin-right: auto;
   }`
 ]
})
export class CharacterFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Character> = new BehaviorSubject(<Character>{});
 
 @Output()
 formValuesChanged = new EventEmitter<Character>();
 
 @Output()
 formSubmitted = new EventEmitter<Character>();
 
 characterForm: FormGroup = new FormGroup({});

 constructor(private fb: FormBuilder) { }
 
 get name() { return this.characterForm.get('name')!; }
 get professionA() { return this.characterForm.get('professionA')!; }
 get professionSpecializationA() { return this.characterForm.get('professionSpecializationA')!; }
 get professionB() { return this.characterForm.get('professionB')!; }
 get professionSpecializationB() { return this.characterForm.get('professionSpecializationB')!; }
  
 ngOnInit() {
   this.initialState.subscribe(character => {
     this.characterForm = this.fb.group({
       name: [ character.name, [Validators.required, Validators.minLength(3)] ],
       professionA: [ character.professionA ],
       professionSpecializationA: [ character.professionSpecializationA ],
       professionB: [ character.professionB],
       professionSpecializationB: [ character.professionSpecializationB ],
     });
   });

   this.characterForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 
 submitForm() {
   this.formSubmitted.emit(this.characterForm.value);
 }
}