import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FieldsService } from '../fields.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Field } from '../field';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.scss']
})
export class FieldDetailComponent implements OnInit {
  field$: Observable<Field>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FieldsService
  ) { }

  ngOnInit() {
    this.field$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getField(parseInt(params.get('id'))))
    );
  }

  gotoFields(field: Field) {
    let fieldId = field ? field.id : null;
    
    this.router.navigate(['/fields', { id: fieldId, foo: 'foo'}]);
  }

}
