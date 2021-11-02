import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service'
import {ActionSheetController} from '@ionic/angular'
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  name : string;

  componentes : Componente[] =[
    {
      icon: 'water-outline', 
      name: 'Aprende a Reciclar y Puntos Verdes', 
      redirecTo: '/info-re'
    },
    {
      icon: 'reader-outline', 
      name: 'Inscripción Retiro Reciclaje', 
      redirecTo: '/form-re'
    },
    {
      icon: 'alarm-outline', 
      name: 'Noticias', 
      redirecTo: '/noticias'
    },
    {
      icon: 'albums-outline', 
      name: 'Inventario Reciclaje', 
      redirecTo: '/inventario-re'
    },
    {
      icon: 'search-outline', 
      name: 'Ver Inventario Reciclaje', 
      redirecTo: '/ver-inve'
    }
  ]

  uid = '';

  public nombre : string = '';

  constructor(private menuController: MenuController,
              public authService: AuthService,
              private actionSheetCtrl: ActionSheetController,
              public bd:BaseDeDatosService) {


          // this.authService.gitUserAuth().subscribe(res => {
            
          //   if(res !== null) {
          //     this.uid = res.uid;
          //   }
          // })
    }


  ngOnInit() {
    this.nombre = '';
    let usuario = JSON.parse(localStorage.getItem("users"));

    console.log(usuario);
    this.nombre = usuario.name;
  }

  mostrarMenu(): void{
    this.menuController.open('first');
  }

  onlogout(){
    localStorage.setItem("users", '');
    this.authService.logout();
  }

  getUserInfo(uid:string){
    const path = 'users';
    // this.firestoreService.getDoc(path)
  }

  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
        text: 'Desconectarse',
        icon: 'power-outline',
        cssClass:'action-sheet-group',
        handler: () => {
          this.onlogout();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass:'action-sheet-group',
        handler: () => {
          console.log('Cancel clicked');
        }
      }],
    });
    await actionSheet.present();
    }
  }
