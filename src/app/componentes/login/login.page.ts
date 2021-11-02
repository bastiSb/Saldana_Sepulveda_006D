import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from "@angular/router"
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
              public router: Router,
              public bd: BaseDeDatosService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(( res ) =>{
      let user = this.bd.getUserName('users', res)
      console.log("El usuario es", user);
      this.router.navigate(['/inicio']);
    }).catch( err => alert('Los datos son incorrectos o no existe el usuario'))
  }
}