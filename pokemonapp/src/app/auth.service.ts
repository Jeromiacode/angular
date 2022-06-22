import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() { }

  login(name: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    const isLoggedIn = (name === 'pikachu' && password === 'pikachu');

    return of(isLoggedIn).pipe(
        delay(1000),
        tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
}

  logout(){
    this.isLoggedIn = false; 
  }
}
