import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  horaCorta: string = (new Date().getHours()+5).toString();
  hora: string = this.horaCorta;

  cuenta = JSON.parse(localStorage.getItem('usuario'));
  nombre = this.cuenta.User;
  datos = "Ingenieria Informatica"
  Correo = this.cuenta.Correo;
  usuario = []

  constructor() { }

  ngOnInit() {
  
  }
  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

}
