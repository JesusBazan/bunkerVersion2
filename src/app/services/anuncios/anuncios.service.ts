import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  API_URI = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getAnuncios(){
    return this.http.get(`${this.API_URI}/anuncios`);
  }
}
