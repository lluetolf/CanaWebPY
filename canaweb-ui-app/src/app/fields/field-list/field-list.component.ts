import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../fields.service';
import { Field } from 'src/app/model/field';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields = new MatTableDataSource<Field>();

  displayedColumns: string[] = ['id', 'name', 'owner', 'last_updated', 'actions'];

  constructor(private fieldService: FieldsService) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.fieldService.getFields()
      .subscribe(fields => { 
        this.fields.data = fields;
        fields.forEach(element => {
          console.log(JSON.stringify(element))
        });
      });
  }
}
