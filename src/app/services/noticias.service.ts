import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5e277299d9c42f38446c767b22ecbb6');
  }


  

}
