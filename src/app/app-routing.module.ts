import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
 
const routes: Routes = [
 { path: '', redirectTo: 'characters', pathMatch: 'full' },
 { path: 'characters', component: CharactersListComponent },
 { path: 'characters/new', component: AddCharacterComponent },
 { path: 'characters/edit/:id', component: EditCharacterComponent }];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }