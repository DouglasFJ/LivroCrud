import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Livro } from '../models/livro';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  url = "http://localhost:8080/api/livro";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.url)
  }

  getLivroByTitulo(titulo: String): Observable<Livro[]>{    
    return this.httpClient.get<Livro[]>(`${this.url}/titulo/${titulo}`)
  }

  getLivrobyId(id: number): Observable<Livro>{
    return this.httpClient.get<Livro>(`${this.url}/${id}`)
  }

  saveLivro(livro: Livro): void{
    this.httpClient.post<Livro>(this.url, JSON.stringify(livro), this.httpOptions).subscribe()
  }

  deleteLivro(id: number): Observable<Livro>{
    return this.httpClient.delete<Livro>(`${this.url}/${id}`, this.httpOptions);
  }
  updateLivro( livro:Livro): void{
    this.httpClient.put<Livro>(`${this.url}/${livro.idLivro}`, livro, this.httpOptions).subscribe()
  }

}
