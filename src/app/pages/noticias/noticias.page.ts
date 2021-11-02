import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import {ActionSheetController} from '@ionic/angular'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: Article[] = []

  constructor(private noticiasService:NoticiasService,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias', resp);
      //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
      this.noticias.push(...resp.articles);
    });
  }
  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
        text: 'Compartir',
        icon: 'share',
        cssClass:'action-sheet-group',
        handler: () => {
          console.log('Share clicked');
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
      }]
    });
    await actionSheet.present();
  }
}


