import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      {
        return new Promise((resolve, reject) => {
          
          onAuthStateChanged(getAuth(), user => {
            if (user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth/login']);
              resolve(false);
            }
          }, error => {
            this.router.navigate(['/auth/login']);
            resolve(false);
          });
        });
    }

    

    }
  }
  

