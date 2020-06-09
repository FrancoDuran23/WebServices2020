import { Component, OnInit } from '@angular/core';

import { ClimaService } from 'src/app/services/clima.service';
@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {

  city: string;


  a: any;

  constructor(private clima_servicio: ClimaService) {

  }

  ngOnInit() {



  }

  public devolverClima() {
    this.clima_servicio.getCli(this.city).subscribe(
      (result) => {
        this.a = result;
        console.log(this.a);



      },


      (error) => { alert("error de peticion"); })

  }
}

