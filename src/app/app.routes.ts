import { Routes } from '@angular/router';
import { HomeComponent } from './features/home.component/home.component';
import { MovieIndividualComponent } from './features/movie-individual.component/movie-individual.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //Componente irá aparecer na raiz do app, localhost:4200.
    {path: 'filme/:id', component: MovieIndividualComponent}
];
