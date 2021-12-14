import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TestmodelComponent } from '../testmodel/testmodel.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  testModel() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '682px';
    dialog.width = '820px';
    dialog.data = {

    };
    const dialogRef = this.dialog.open(TestmodelComponent, dialog);
  }

  ngOnInit(): void {
  }

}
