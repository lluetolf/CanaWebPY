import { Component, OnInit } from '@angular/core';
import { Field } from '../model/field';
import { FieldsService } from '../fields/fields.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fields: Field[] = [];

  constructor(private fieldsService: FieldsService) {}

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.fieldsService.getFields()
      .subscribe(fields => {
        this.fields = fields;
        fields.forEach(element => {
          console.log(JSON.stringify(element));
        });
      }
      );
  }
}
