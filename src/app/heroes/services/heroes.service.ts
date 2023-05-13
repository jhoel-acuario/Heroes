import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl:string = environment.baseUrl

  constructor(private http : HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }
  getHeroById(id:string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError(error=>{
       return of(undefined);
      })
    )

  }
  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`/heroes?q=${query}&_limit=6`)
  }


}
