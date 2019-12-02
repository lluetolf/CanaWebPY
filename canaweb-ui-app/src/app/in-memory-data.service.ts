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

    const payables = [
      {
        id: 1,
        pricePerUnit: 5.00,
        transactionDate: '01.01.2018',
        quantity: 1,
        documentId: 1,
        fieldId: 1,
        category: 'Fertilizante',
        subCategory: 'Algo algo',
        comment: 'Mini dice que se necesita.',
        lastUpdated: '01.01.2018',
      },
      {
        id: 2,
        pricePerUnit: 67.00,
        transactionDate: '01.01.2018',
        quantity: 3,
        documentId: 5,
        fieldId: 2,
        category: 'Fertilizante',
        subCategory: 'Algo algo',
        comment: 'Mini dice que se necesita.',
        lastUpdated: '01.01.2018',
      },
      {
        id: 3,
        pricePerUnit: 1111.00,
        transactionDate: '01.01.2018',
        quantity: 2,
        documentId: 3,
        fieldId: 1,
        category: 'Fertilizante',
        subCategory: 'Algo algo',
        comment: 'Mini dice que se necesita.',
        lastUpdated: '19.05.2018',
      },
    ]

    return {fields, payables};
  }

  constructor() { }
}
