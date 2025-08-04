import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',

})

export class Search {
  termoBusca: string = '';
  movies: any[] = [];
  constructor(private tmdb: TmdbService) {}
  buscar(){
    console.log("Busca: ", this.termoBusca);
    this.tmdb.buscarFilmes(this.termoBusca).subscribe(resposta => {
      this.movies = resposta.results;
    });
  }
}
