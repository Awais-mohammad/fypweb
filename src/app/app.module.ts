import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PreprocessComponent } from './preprocess/preprocess.component';


// material imports
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FeaturesComponent } from './features/features.component';
import { MatIconModule } from '@angular/material/icon';
import { MLComponent } from './ml/ml.component';
import { ExceptionComponent } from './exception/exception.component';
import { DatasetComponent } from './dataset/dataset.component';
import { MatSelectModule } from '@angular/material/select';
import { ResultsComponent } from './results/results.component';
import { TestmodelComponent } from './testmodel/testmodel.component';
import { CompareComponent } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    PreprocessComponent,
    FeaturesComponent,
    MLComponent,
    ExceptionComponent,
    DatasetComponent,
    ResultsComponent,
    TestmodelComponent,
    CompareComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
