import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AaaaService {

  constructor(private http: HttpClient) { }

  listar<T>() { 
    return this.http.get<T>('/rest/aaaa.json');
  }
}