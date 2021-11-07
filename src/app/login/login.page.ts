import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild ('username') user;
  @ViewChild ('password') password;
  @ViewChild ('mensaje') mensaje;
  constructor(private router: Router, private alertCtrl: AlertController) { }

  login(){
    if(this.user.value == "tellevo" && this.password.value == "meayudas"){
      this.router.navigate(['../welcome']);
    } else {
      this.mensaje.value = "❗ Usuario o contraseña incorrectos";
    }

  }
  ngOnInit() {
  }
  recuperar() {
    this.router.navigate(['../recuperar'])
  }

  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
