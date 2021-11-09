import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = []

  constructor() { }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    var usuarios = this.usuario;
  }
  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
