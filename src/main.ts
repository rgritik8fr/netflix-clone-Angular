import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment,  } from './environments/environment';
import { initializeApp } from "firebase/app";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 const firebaseConfig = {
    apiKey: "AIzaSyBVe9J5X8Ypwaa5zjZ4udx0GvVXC0Uceyw",
    authDomain: "netflix-2ee92.firebaseapp.com",
    projectId: "netflix-2ee92",
    storageBucket: "netflix-2ee92.appspot.com",
    messagingSenderId: "960965059425",
    appId: "1:960965059425:web:3123b1a1e9762f5d905b20"
  };

  const app = initializeApp(firebaseConfig);
