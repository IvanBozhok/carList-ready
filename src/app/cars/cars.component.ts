import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})

export class CarsComponent implements OnInit {

  cars: Array<Car>;

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe(resCarData => this.cars = resCarData);
  }
}
