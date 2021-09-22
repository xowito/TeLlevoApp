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

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  welcome(){
    this.router.navigate(['../welcome']);
  }

}
