import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const fields = [
      {
        id: 1,
        acquisition_date: '2018-08-26',
        cultivated_area: 5.5,
        ingenio_id: 12345,
        last_updated: '2018-08-26',
        name: 'Pandita',
        owner: 'Pandita',
        size: 5.5
      },
      {
        id: 2,
        acquisition_date: '2015-12-28',
        cultivated_area: 5.5,
        ingenio_id: 54321,
        last_updated: '2015-12-28',
        name: 'Monkey',
        owner: 'Monkey',
        size: 5.5
      }
  ];
    return {fields};
  }

  constructor() { }
}
