import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { BlankComponent } from './gui/blank/blank.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'home', component: BlankComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
