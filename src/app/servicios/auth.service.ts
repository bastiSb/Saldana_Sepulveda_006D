import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: string = '';

  constructor(private Afauth : AngularFireAuth,
              private router: Router,
              private db: AngularFirestore) { }

  login(email:string, password:string): Promise<string> {

    return new Promise((resolve, rejected) =>{
      this.Afauth.signInWithEmailAndPassword(email, password).then(user => {
        console.log('user uid', user.user.uid);
        resolve(user.user.uid);
      }).catch(err => rejected(err))
    })
  }

  logout(){
    this.Afauth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  registrer(email: string, password: string, name: string){

    return new Promise((resolve, reject) => {
      this.Afauth.createUserWithEmailAndPassword(email, password).then(res => {
          console.log(res.user.uid);
        const uid = res.user.uid;
          this.db.collection('users').doc(uid).set({
            name : name,
            uid : uid,
          })
        resolve(res)
      }).catch(err => reject(err))
    })
  }



  gitUserAuth(){
    return this.Afauth.authState
  }
}
