import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  sig: string;
  zod: Horoscopo;
  a: any;

  constructor(private horoscopo_servicio: HoroscopoService) {
    this.devolverZod();
    this.zod = new Horoscopo();
  }

  ngOnInit() {



  }

  public devolverZod() {
    this.horoscopo_servicio.getZod().subscribe(
      (result) => {
        this.a = result;
        console.log(this.a.horoscopo.aries.nombre);



      },


      (error) => { alert("error de peticion"); })

  }
}

