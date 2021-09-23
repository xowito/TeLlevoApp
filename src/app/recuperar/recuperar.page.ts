import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  @ViewChild('username') user;
  @ViewChild('mail') mail;
  @ViewChild('mensaje') mensaje;

  constructor(private router: Router) {
  }

  recuperar() {
    if (this.user.value == "tellevo" && this.mail.value == "tellevoapp@gmail.com") {
      this.mensaje.color = "success";
      this.mensaje.value = "Se ha enviado un enlace de confirmación a su correo.";
    } else {
      this.mensaje.value = "Asegurate de que sea un correo o usuario valido.";
    }

  }

  ngOnInit() {
  }

}
