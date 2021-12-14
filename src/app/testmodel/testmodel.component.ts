import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-testmodel',
  templateUrl: './testmodel.component.html',
  styleUrls: ['./testmodel.component.scss']
})
export class TestmodelComponent implements OnInit {

  constructor(
    private dialoge: MatDialog
  ) {
    this.view = 'one'
  }

  view: string;

  show(viewName: string) {
    this.view = viewName
  }

  close() {
    this.dialoge.closeAll()
  }

  ngOnInit(): void {
  }

}
