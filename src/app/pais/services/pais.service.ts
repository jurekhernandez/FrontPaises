import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private UrlApi:string ="https://paises20220521165936.azurewebsites.net/api/paises";
 // private UrlApi:string ="https://restcountries.com/v3.1/";
 // se deja ambos link por problemas de cors
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.UrlApi}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.UrlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  
  GetCountryForCode(code:string):Observable<Country[]>{
    const url=`${this.UrlApi}/code/${code}`;
    return this.http.get<Country[]>(url);
  }

  allCountries():Observable<Country[]>{
    const url=`${this.UrlApi}/`;
    return this.http.get<Country[]>(url);
  }

}
