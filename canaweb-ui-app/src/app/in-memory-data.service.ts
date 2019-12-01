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
        acquisitionDate: '26.08.2018',
        cultivatedArea: 5.5,
        ingenioId: 12345,
        lastUpdated: '2018-08-26',
        name: 'Pandita',
        owner: 'Pandita',
        size: 5.5
      },
      {
        id: 2,
        acquisitionDate: '28.12.2015',
        cultivatedArea: 5.5,
        ingenioId: 54321,
        lastUpdated: '2015-12-28',
        name: 'Monkey',
        owner: 'Monkey',
        size: 5.5
      }
  ];
    return {fields};
  }

  constructor() { }
}
