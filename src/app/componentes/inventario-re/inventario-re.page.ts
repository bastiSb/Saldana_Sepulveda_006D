import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Inventario } from '../../interfaces/interfaces'
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';
import {LoadingController} from '@ionic/angular'

@Component({
  selector: 'app-inventario-re',
  templateUrl: './inventario-re.page.html',
  styleUrls: ['./inventario-re.page.scss'],
})
export class InventarioRePage implements OnInit {

  newInventario: Inventario = {
    tipo: '',
    categoria: '',
    cantidad: null,
    html: '',
    id: ''
  }

  loading: any;

  constructor(public bd: BaseDeDatosService,
              public toastController: ToastController,
              public LoadingController: LoadingController){}

  ngOnInit() {
  }

  async saveInventario(){
    this.presentLoading();
    console.log(this.newInventario)
    const data = this.newInventario;
    data.id = this.bd.createId();
    const enlace = 'Inventario';
    await this.bd.createDocument<Inventario>(data, enlace,data.id);
    this.presentToast('Guardado Con Exito!', 2000);
    this.loading.dismiss();
    this.newInventario = {
      tipo: '',
      categoria: '',
      cantidad: null,
      html: '',
      id: ''
    };
  }



  async presentToast(mensaje: string, tiempo: number){
    const toast = await this.toastController.create({message: mensaje, duration: tiempo});
    toast.present();
  }


  async presentLoading(){
    this.loading = await this.LoadingController.create({
      message: 'Guardando...',
    });
    await this.loading.present();
  }
}

