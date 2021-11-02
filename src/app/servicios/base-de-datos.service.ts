import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {
  getCollectionChanges(enlace: string) {
    throw new Error('Method not implemented.');
  }
  Service: any;

  public nombreUsuario: any = '';

  constructor(public Firestore: AngularFirestore) {}

  createDocument<tipo>(data: tipo, enlace: string, id: string){
     const ref = this.Firestore.collection<tipo>(enlace);
     return ref.doc(id).set(data);
  }


  createId(){
    return this.Firestore.createId();
  }

  deleteDocument(){
  }



  getDocument<tipo>(enlace: string): Observable<tipo[]>{
    const ref  =  this.Firestore.collection<tipo>(enlace);
    console.log(ref);
    return ref.valueChanges();
   }


    getUserName<tipo>(enlace: string, uid: string): any{
     return this.Firestore.collection<tipo>(enlace).doc(uid).get().subscribe((doc) =>{
        console.log("data es", doc.data());
        localStorage.setItem("users", JSON.stringify(doc.data()));
        this.nombreUsuario = doc.data();
        doc.data();
    });
   }
  
  editDocument(){

  }


}
