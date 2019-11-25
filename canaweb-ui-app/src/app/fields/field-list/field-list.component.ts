import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {

  constructor(private fieldService: FieldsService) { }

  ngOnInit() {
  }

}
