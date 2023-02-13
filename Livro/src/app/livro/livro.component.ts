import { Component } from '@angular/core';
import { LivroService } from '../services/livro.service'
import { Livro } from '../models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {

  livros: Livro[] = [];

  constructor (private apiLivro: LivroService) {}

  ngOnInit() {
    this.getLivros();
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

}