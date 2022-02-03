import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/common/navbar/navbar.component';
import { HOmeComponent } from './Component/pages/home/home.component';
import { InputSelectComponent } from './Component/common/input-select/input-select.component';
import { ButtonsComponent } from './Component/common/buttons/buttons.component';
import { AddSectionComponent } from './Component/similar/Advertisment/add-section/add-section.component';
import { AccodationComponent } from './Component/common/elements/accodation/accodation/accodation.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthHomeComponent } from './Component/pages/auth/auth-home/auth-home.component';
import { BannerSliderComponent } from './Component/common/elements/banner-slider/banner-slider.component';
import { CardComponent } from './Component/common/elements/card/card.component';
import { CategoriesCardComponent } from './Component/common/similar-section/categories-card/categories-card.component';
import { NotFoundComponent } from './Component/pages/not-found/not-found.component';
import { MovieDetailsComponent } from './Component/pages/auth/movie-details/movie-details.component';
import { FooterComponent } from './Component/common/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HOmeComponent,
    InputSelectComponent,
    ButtonsComponent,
    AddSectionComponent,
    AccodationComponent,
    AuthHomeComponent,
    BannerSliderComponent,
    CardComponent,
    CategoriesCardComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
