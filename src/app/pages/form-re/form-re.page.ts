import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-re',
  templateUrl: './form-re.page.html',
  styleUrls: ['./form-re.page.scss'],
})
export class FormRePage implements OnInit {

  usuario = {
    nombreCompleto:'',
    edad:'',
    telefono:'',
    email:'',
    password:''

  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
