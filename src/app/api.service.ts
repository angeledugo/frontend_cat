import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }


  getBreeds(): Observable<any> {
    return this.http.get(`${this.API_URL}/cats/breeds`);
  }

  getBreedById(breed_id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/cats/breeds/${breed_id}`);
  }

  searchBreeds(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}/cats/breeds/search?q=${query}`);
  }

  getImagesByBreedId(breed_id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/images/imagesbybreedid?breed_id=${breed_id}`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.API_URL}/users/login`, { params: { username, password } });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/users/register`, { username, password });
  }
}
