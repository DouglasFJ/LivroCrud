import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Search{
  busca: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro';

  search: Search = {} as Search;

  constructor(private router: Router){}

  onSubmit(){
    /*
    if('/titulo' === this.router.url.slice(0,7)){
      this.router.navigate([`/titulo/${this.search.busca}`])
      location.reload()
    }else{
      this.router.navigate([`/titulo/${this.search.busca}`])
    }*/
    this.router.navigate([`/titulo/${this.search.busca}`])
    
  }
}
