import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.html',
  styleUrl: './busca.scss',

})

export class Busca {
  termoBusca: string = '';
  buscar(){
    console.log("Busca: ", this.termoBusca);
    //Chamar serviço para busca dos filmes
  }
}
