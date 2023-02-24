import { Component } from '@angular/core';
import { LivroService } from '../services/livro.service'
import { Livro } from '../models/livro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {

  livros: Livro[] = [];
  titulo = this.activatedRoute.snapshot.paramMap.get('titulo');

  constructor (
    private apiLivro: LivroService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if(this.titulo){
      this.getLivrosByTitulo(this.titulo)
      location.reload()
    }else{
      this.getLivros();
    }
  }

  getLivros(){
    this.apiLivro.getLivros().subscribe((livros: Livro[])=> {
      this.livros = livros;
    })
  }
  deleteLivros(id: number){
    this.apiLivro.deleteLivro(id).subscribe(()=>{
      this.getLivros;
    })
    location.reload()
  }
  getLivrosByTitulo(titulo: String){
    this.apiLivro.getLivroByTitulo(titulo).subscribe((livros: Livro[])=>{
      this.livros = livros
    })
  }

}