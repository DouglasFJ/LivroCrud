import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livroform',
  templateUrl: './livroform.component.html',
  styleUrls: ['./livroform.component.css']
})
export class LivroformComponent {

  id = this.activatedRoute.snapshot.paramMap.get('id')
  livro: Livro = {} as Livro;

  constructor (
    private apiLivro: LivroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    if (this.id){
      this.getLivroById(parseInt(this.id))
    }
  }

  onSubmit(){
    if(this.id){
      this.editLivro()
    }else{
      this.saveLivro()
    }
    this.router.navigate([''])
  }

  getLivroById(id: number){
    this.apiLivro.getLivrobyId(id).subscribe((livro: Livro)=>{
      this.livro = livro;
    })
  }

  saveLivro(){
    this.apiLivro.saveLivro(this.livro);
  }

  editLivro(){
    this.apiLivro.updateLivro(this.livro)
  }
}
