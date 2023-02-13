import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './livro/livro.component';
import { LivroformComponent } from './livroform/livroform.component';

const appRoutes: Routes = [
  { path: '', component: LivroComponent },
  { path: 'add', component: LivroformComponent},
  { path: 'edit/:id', component: LivroformComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
