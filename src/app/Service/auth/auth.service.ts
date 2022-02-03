import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  provider: any = new GoogleAuthProvider();
  auth: any = getAuth();
  user: any;
  logedIN: boolean = false;

  constructor(private router: Router) {}

  loginState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user.displayName;

        this.logedIN = true;

        // ...
      } else {
        this.logedIN = false;
      }
    });
  }

  signIn() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.

        this.router.navigate([`authhome`]);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  getname() {
    return this.user;
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate([`home`]);
        console.log("done");
        
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
