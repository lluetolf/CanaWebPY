import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldsService } from './fields/fields.service';
import { Field } from './model/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
          console.log(JSON.stringify(element))
        });
      }
      );
  }
}
