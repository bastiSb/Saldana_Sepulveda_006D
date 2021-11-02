import { Component, OnInit } from '@angular/core';
import { Inventario } from '../../interfaces/interfaces';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';

@Component({
  selector: 'app-ver-inve',
  templateUrl: './ver-inve.page.html',
  styleUrls: ['./ver-inve.page.scss'],
})
export class VerInvePage implements OnInit {

  public inventarios: Array<Inventario> = new Array<Inventario>();

  constructor(public bd: BaseDeDatosService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    const enlace = 'Inventario';
    this.bd.getDocument<Inventario>(enlace).subscribe(( res => {
        console.log(res);
        this.inventarios = res;
    }))
    };
  }
