import { Component, OnInit } from '@angular/core';
import { Search } from '../search/search';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [Search, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  movies: any[] = [];
  
  constructor(
    private tmdb: TmdbService,
    private router: Router
  ) {}

  ngOnInit(){
    this.tmdb.getPopularMovies().subscribe({
      next: (res: any)=>{
        console.log('Conectamos! Os filmes populares são: ', res);
        this.movies = res.results;
      },
      error: (err)=> {
        console.log("Erro ao tentar conectar com a API do TMDb: ", err);
      }
    });
  }

  acessar(movie: any){
    this.router.navigate(['/filme', movie.id]);
  }
}
