import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/helper/helper';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logo = Logo;

  constructor(private router: Router, private Authtication: AuthService) {}

  provider: any;
  auth: any = getAuth();
  user: any;
  logedIN = false;

  ngOnInit(): void {
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
    this.Authtication.signIn();

    console.log(this.Authtication.getname());
  }

  Logout (){
    this.Authtication.logout();
  }
}
