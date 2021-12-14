import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExceptionComponent } from '../exception/exception.component';
import { TestmodelComponent } from '../testmodel/testmodel.component';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,

  ) { }
  width = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

  proceed() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '600px';
    dialog.width = '900px';
    dialog.data = {

    };
    const dialogRef = this.dialog.open(WorkComponent, dialog);
  }

  showExcept() {

    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '582px';
    dialog.width = '800px';
    dialog.panelClass = 'custom-dialog-container'
    dialog.data = {

    };
    const dialogRef = this.dialog.open(ExceptionComponent, dialog);
  }
  // remove after work!!!

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
    // this.proceed()
    // this.testModel()
  }

}
