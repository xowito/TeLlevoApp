import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;
  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/welcome',
      icono: 'home'
    },
    {
      titulo: 'Perfil',
      url: '/menu/perfil',
      icono: 'person'
    }
  ]
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }
  
  async salir(){
    const alert = await this.alertController.create({
      header : 'Salir',
      message: 'Estas seguro que deseas salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
      {
        text: 'Si, estoy seguro',
        handler: () => {
          localStorage.removeItem('ingresado');
          this.router.navigate(['../home']);
        }
      }]
    });
    await alert.present();
  }
  

}
