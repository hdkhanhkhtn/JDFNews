import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';
import { MenusComponent } from './menus/menus.component';

const appRouter: Routes = [
  {
    path: '',
    component: MainpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatTableModule,
    MatInputModule,
    OwlModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [{
  	provide: APP_BASE_HREF, useValue: ''
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
