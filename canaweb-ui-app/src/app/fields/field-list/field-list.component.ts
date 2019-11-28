import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../fields.service';
import { Field } from 'src/app/model/field';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EditFieldDialogComponent } from '../edit-field-dialog/edit-field-dialog.component';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields = new MatTableDataSource<Field>();

  displayedColumns: string[] = ['id', 'name', 'owner', 'last_updated', 'actions'];

  constructor(private fieldService: FieldsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.fieldService.getFields()
      .subscribe(fields => {
        this.fields.data = fields;
        fields.forEach(element => {
          console.log(JSON.stringify(element));
        });
      });
  }

  openEditDialog(field: Field): void {
    const dialogRef = this.dialog.open(EditFieldDialogComponent, {
      width: '600px',
      data: field
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(field)
    });
  }

  openCreateDialog(field: Field): void {
    const dialogRef = this.dialog.open(EditFieldDialogComponent, {
      width: '250px',
      data: field
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(field)
    });
  }
}
