import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCharacterComponent } from './add-character/add-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component'; 
 
@NgModule({
 declarations: [
   AppComponent,
   CharactersListComponent,
   CharacterFormComponent,
   AddCharacterComponent,
   EditCharacterComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
