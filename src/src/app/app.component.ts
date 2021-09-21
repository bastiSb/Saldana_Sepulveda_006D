import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
  constructor() {}
}
