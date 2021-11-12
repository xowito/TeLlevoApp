import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegistro: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private alertController: AlertController) {
    this.formRegistro = this.fb.group({
      'User': new FormControl("", Validators.required),
      'Correo': new FormControl("", Validators.required),
      'Password1': new FormControl("", Validators.required),
      'Password2': new FormControl("", Validators.required),
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }
  ngOnInit() {
  }
  volver(){
    this.router.navigate(['../home'])
  }

  async guardar() {
    var f = this.formRegistro.value;

    if (this.formRegistro.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Registro incompleto',
        message: 'Rellena todos los campos antes de registrarte',
        buttons: ['OK']
      });

      await alert.present();
      return;

    }

    var usuario = {
      User: f.User,
      Correo: f.Correo,
      Password1: f.Password1,
      Password2: f.Password2
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log(localStorage.getItem('usuario'))
    this.router.navigate(['../login'])
  }
}
