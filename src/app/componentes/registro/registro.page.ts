import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  public email : string;
  public name : string;
  public password : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.auth.registrer(this.email, this.password, this.name).then( auth => {
      this.router.navigate(["/inicio"])
      console.log(auth)
    }).catch(err => console.log(err))
  }
}
