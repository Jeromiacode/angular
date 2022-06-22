import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  // boolean qui permet de naviguer vers la route ou non.  
  canActivate(): boolean{
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);

    return false;
}
}
