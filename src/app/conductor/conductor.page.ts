import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  formViaje : FormGroup;
  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  horaCorta: string = (new Date().getHours()+5).toString();
  hora: string = this.horaCorta;
  conductores: any =[];
  id: any;
  finalId: number;
  nombre: string;
  edad: number;
  vehiculo: string;
  image: string;
  vim: string;
  vim2: string;
  viajes: number;
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private fb: FormBuilder, private http: HttpClient, private alertController: AlertController) { 
    this.formViaje = this.fb.group({
      'fecha': new FormControl("",Validators.required),
      'hora': new FormControl("",Validators.required),
      'destino': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    this.getConductores().subscribe(res =>{
      console.log("Res",res)
      this.conductores = res;
      this.nombre = this.conductores[this.finalId].nombre;
      this.edad = this.conductores[this.finalId].edad;
      this.vehiculo = this.conductores[this.finalId].vehiculo;
      this.image = this.conductores[this.finalId].image;
      this.vim = this.conductores[this.finalId].vim;
      this.vim2 = this.conductores[this.finalId].vim2;
      this.viajes = this.conductores[this.finalId].viajes;
    })
    
  }
  getConductores(){
    return this.http
    .get('assets/files/conductores.json')
    .pipe(
      map((resp: any) =>{
        return resp.data
      })
    )
  }

  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
  destino(){
    this.router.navigate(['../menu/destino']);
  }
  async viajar() {{
    var f = this.formViaje.value;
    if (this.formViaje.invalid){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Viaje No Programado',
        message: 'Asegurate de elegir una Hora antes de pedir un viaje',
        buttons: ['OK']
      });


      await alert.present();
      return;
    }
  var viaje = {
    fecha: f.fecha,
    hora: f.hora
  }
  }

  localStorage.setItem('viaje', JSON.stringify(viaje));
  this.router.navigate(['../menu/welcome'])

  if (!this.formViaje.invalid){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Viaje Programado con exito',
      message: 'Su viaje a sido programadao',
      buttons: ['OK']
    });

    await alert.present();
    return;
}
  
  
  }}
