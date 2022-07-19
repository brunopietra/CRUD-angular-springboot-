import {Component} from '@angular/core';

export interface parkingElements {
  id: string,
  parkingSpotNumber: Number,
  licensePlateCar: string,
  brandCar: string,
  colorCar: string,
  registrationDate: string,
  responsibleName: string,
  apartment: Number,
  block: string,
  modelCar: string
}

const ELEMENT_DATA: parkingElements[] = [
  {id:'9e0032b6-f915-4a37-b737-6b3c69837410',parkingSpotNumber:2058,licensePlateCar:'RRS8562',brandCar:'audi',colorCar:'black',registrationDate:'2022-06-11T03:15:20.223421',responsibleName:'Carlos Daniel',apartment:205,block:'B',modelCar:'q5'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parking-control';
  displayedColumns: string[] = ['id', 'parkingSpotNumber', 'licensePlateCar', 'brandCar', 'colorCar', 'registrationDate', 'responsibleName', 'apartment', 'block', 'modelCar', 'action'];
  dataSource = ELEMENT_DATA;
}
