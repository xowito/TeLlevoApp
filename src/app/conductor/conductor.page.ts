import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  conductores: any =[];
  id: any;
  finalId: number;
  nombre: string;
  edad: number;
  vehiculo: string;
  image: string;
  vim: string;
  vim2: string;
  constructor(private activatedRoute:ActivatedRoute,private http: HttpClient) { }

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
}
