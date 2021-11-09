import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  conductores: any =[];


  constructor( private http: HttpClient) { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }


  ngOnInit() {
    console.log("hola")
    this.getConductores().subscribe(res =>{
      console.log("Res",res)
      this.conductores = res;

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
