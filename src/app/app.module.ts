import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MenuComponent } from './menu/menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'car/:id', component: CarComponent },
  { path: 'developer', component: DeveloperComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MenuComponent,
    DeveloperComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
