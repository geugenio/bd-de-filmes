import { Injectable } from "@angular/core";
//importando o decorator que vai indicar que a classe vai ser injetada como um serviço em outras partes do nosso projeto

import { HttpClient } from "@angular/common/http";
// Serviço para fazer requisições HTTP como a get, que precisamos para efetuar a busca

import { environment } from '../../environments/environment.secret';
//Variável de ambiente que contém a nossa chave da API.

import { Observable } from "rxjs";
// Observable é o tipo retornado por chamadas HTTP no Angular, representa valores que são recebidos de forma assincrona

@Injectable({
    providedIn: 'root'
})
export class TmdbService{
    private apiKey = environment.tmdbApiKey;
    private urlBase = 'https://api.temoviedb.org/3';

    constructor(private http: HttpClient){}
    buscarFilmes(termo: string): Observable<any> {
        const url = '${this.urlBase}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(termo)}';
        return this.http.get(url);
    }
}