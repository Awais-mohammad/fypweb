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
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  task: Task = {
    name: 'Ckeck me to compute all features',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'TF-idf vectorizer', completed: false, color: 'primary' },
      { name: 'Word2vec feature model', completed: false, color: 'primary' },
      { name: 'Punctuation Features', completed: false, color: 'primary' },
      { name: 'Bert', completed: false, color: 'primary' },
      { name: 'Subjectivity Score', completed: false, color: 'primary' },

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
