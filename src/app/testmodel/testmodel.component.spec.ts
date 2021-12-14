import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodelComponent } from './testmodel.component';

describe('TestmodelComponent', () => {
  let component: TestmodelComponent;
  let fixture: ComponentFixture<TestmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
