import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-preprocess',
  templateUrl: './preprocess.component.html',
  styleUrls: ['./preprocess.component.scss']
})
export class PreprocessComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  task: Task = {
    name: 'Ckeck me to apply all preprocessing techniques on Dataset',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Stop Words Removal', completed: false, color: 'primary' },
      { name: 'Extraction of words from numeronyms', completed: false, color: 'primary' },
      { name: 'POS tagging', completed: false, color: 'primary' },
      { name: 'Lemmitization', completed: false, color: 'primary' },
      { name: 'Pascal Case hashed words', completed: false, color: 'primary' },

    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}
