import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { OwlModule } from 'ngx-owl-carousel';
import { MenusComponent } from './menus/menus.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { MatTableModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

import { MyserviceService } from './myservice.service';
import { ContentFilterPipe } from './content-filter.pipe';
import { CategoryComponent } from './category/category.component';

const appRouter: Routes = [
  { path: '', redirectTo:'/main', pathMatch: 'full' },
  { path: 'main', component: MainpageComponent },
  { path: 'article/:id',  component: SinglepageComponent },
  { path: 'category/:cid',  component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    MenusComponent,
    SinglepageComponent,
    ContentFilterPipe,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    OwlModule,
    MatButtonModule,
    MatMenuModule, 
    MatSidenavModule,
    MatDatepickerModule, 
    MatInputModule, 
    MatNativeDateModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [ RouterModule ],
  providers: [
    {
    	provide: APP_BASE_HREF, useValue: ''
    }, 
    MyserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
