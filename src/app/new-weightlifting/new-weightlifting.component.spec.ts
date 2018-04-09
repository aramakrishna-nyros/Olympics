import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeightliftingComponent } from './new-weightlifting.component';

describe('NewWeightliftingComponent', () => {
  let component: NewWeightliftingComponent;
  let fixture: ComponentFixture<NewWeightliftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWeightliftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWeightliftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
