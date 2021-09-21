import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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

  componentes : Componente[] =[
    {
      icon: 'sunny-outline', 
      name: 'Aprende a Reciclar y Puntos Verdes', 
      redirecTo: '/info-re'
    },
    {
      icon: 'alarm-outline', 
      name: 'Inscripción Retiro Reciclaje', 
      redirecTo: '/form-re'
    },
  ]
  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
