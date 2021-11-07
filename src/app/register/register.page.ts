import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegistro:FormGroup;

  constructor(private router: Router, public fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      'User': new FormControl("")
    })
   }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['../login']);
  }

}
