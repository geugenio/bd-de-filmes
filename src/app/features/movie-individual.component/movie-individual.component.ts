import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-individual.component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './movie-individual.component.html',
  styleUrl: './movie-individual.component.scss'
})
export class MovieIndividualComponent {
  movieId!: string;
  movieDados: any;
  castDados: any;
  cincoPrimeirosAtores: any;

  director: any;

  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService

  ){}

  ngOnInit(){
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    console.log("ID: ", this.movieId);
    this.tmdb.getMoviePerId(this.movieId).subscribe(data => {
      this.movieDados = data;
      console.log("Dados: ", this.movieDados);
    })

    this.tmdb.getCastPerId(this.movieId).subscribe(data =>{
      this.castDados = data;
      console.log("Dados do Cast: ", this.castDados);
      this.director = data.crew.find((member: any)=> member.job === 'Director');
      console.log(this.director);
      this.cincoPrimeirosAtores = data.cast.sort((a: any, b: any) => a.order - b.order);
      this.cincoPrimeirosAtores = this.cincoPrimeirosAtores.slice(0, 5);

    })
    
  }


}
