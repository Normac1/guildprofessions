import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import * as mongodb from "mongodb";
import { Character } from './interfaces/character';
 
@Injectable({
 providedIn: 'root'
})
export class CharacterService {
 private url = 'http://localhost:5200';
 private characters$: Subject<Character[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshCharacters() {
   this.httpClient.get<Character[]>(`${this.url}/characters`)
     .subscribe(characters => {
       this.characters$.next(characters);
     });
 }
 
 getCharacters(): Subject<Character[]> {
   this.refreshCharacters();
   return this.characters$;
 }
 
 getCharacter(id: string): Observable<Character> {
   return this.httpClient.get<Character>(`${this.url}/characters/${id}`);
 }
 
 createCharacter(character: Character): Observable<string> {
   return this.httpClient.post(`${this.url}/characters`, character, { responseType: 'text' });
 }
 
 updateCharacter(id: string, character: Character): Observable<string> {
   return this.httpClient.put(`${this.url}/characters/${id}`, character, { responseType: 'text' });
 }
 
 deleteCharacter(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/characters/${id}`, { responseType: 'text' });
 }
}
