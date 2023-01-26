import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async loginWithEmailAndPassword (user: User) {
    // TODO: Login für Benutzer ausprogrammieren
  }

  async createUserWithEmailAndPassword (user: User) {
   // TODO: Registrierung für den Benutzer ausprogrammieren
  }
  
  async logout() {
    // TODO: User ausloggen
  }
}

export interface User {
  email: string;
  password: string;
  displayname: string;
}
