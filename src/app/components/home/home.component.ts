import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service'
import { Noticia } from 'src/app/models/noticia';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categoria: string;
  noticia: Noticia;
  vector_noticia: Array<Noticia>;
  constructor(private noticia_servicio: NoticiaService) {
    this.noticia = new Noticia();
    this.vector_noticia = new Array<Noticia>();
    this.cargarNoticias();
  }

  ngOnInit(): void {
  }

  public cargarNoticias() {
    this.noticia_servicio.getNews(this.categoria).subscribe(
      (result) => {
        this.vector_noticia = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.vector_noticia.push(this.noticia);
        });
        console.log(this.vector_noticia);
      },
      error => { alert("error de peticion"); })

  }


}

