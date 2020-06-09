import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  pais: string;
  covid: Covid;
  a: any;
  b: any;
  filtroRecuperado: boolean = false;
  filtroMuerte: boolean = false;
  filtroCaso: boolean = false;
  checkRecuperado: boolean = false;
  checkMuerte: boolean = false;
  checkCaso: boolean = false;
  filtro: boolean;



  constructor(private covid_servicio: CovidService) {
    this.covid = new Covid();



  }

  ngOnInit() {

    this.filtro = false;

    this.covid_servicio.getCov1().subscribe(
      (result) => {
        this.a = result;
        console.log(this.a);



      },


      (error) => { alert("error de peticion"); })

  }






  public devolverCov() {
    this.filtro = true;
    this.covid_servicio.getCov(this.pais).subscribe(
      (result) => {
        this.b = result;

        this.filtroMuertes();
        this.filtroRecuperados();
        this.filtroCasos();
        console.log(this.b);

      },


      (error) => { alert("error de peticion"); })

  }
  filtroCasos = () => {
    this.checkCaso == true
      ? (this.filtroCaso = true)
      : (this.filtroCaso = false);
  };
  filtroRecuperados = () => {
    this.checkRecuperado == true
      ? (this.filtroRecuperado = true)
      : (this.filtroRecuperado = false);
  };
  filtroMuertes = () => {
    this.checkMuerte == true
      ? (this.filtroMuerte = true)
      : (this.filtroMuerte = false);
  };
  changeMue = () => {
    this.checkMuerte == false
      ? (this.checkMuerte = true)
      : (this.checkMuerte = false);
  };
  changeRec = () => {
    this.checkRecuperado == false
      ? (this.checkRecuperado = true)
      : (this.checkRecuperado = false);
  };
  changeCas = () => {
    this.checkCaso == false
      ? (this.checkCaso = true)
      : (this.checkCaso = false);
  };

}
