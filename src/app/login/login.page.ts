import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  formLogin : FormGroup;

  @ViewChild ('username') user;
  @ViewChild ('password') password;
  @ViewChild ('mensaje') mensaje;
  constructor(private router: Router, private alertController: AlertController, private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      'User': new FormControl("",Validators.required),
      'Password': new FormControl("",Validators.required)

    })
   }

  async ingresar(){
    var f = this.formLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.User == f.User && usuario.Password1 == f.Password){
      localStorage.setItem('ingresado','true')
      this.router.navigate(['../welcome']);
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos incorrectos',
        message: 'Asegurate que los datos que ingresaste sean correctos',
        buttons: ['OK']
      });

      await alert.present();
      return;
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
