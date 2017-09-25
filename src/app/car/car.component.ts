import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-info',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})

export class CarComponent implements OnInit {

  public car: Object = {};

  constructor(private route: ActivatedRoute, private _carService: CarService) {}

  ngOnInit() {
    this.getCarDetail(this.route.snapshot.params['id']);
  }

  getCarDetail(id) {
    this._carService.getCar(id).then((res) => {
      this.car = res;
      console.log(this.car);
    }, (err) => {
      console.log(err);
    });
  }
}


