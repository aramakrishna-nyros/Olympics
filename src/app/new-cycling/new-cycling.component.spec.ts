import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCyclingComponent } from './new-cycling.component';

describe('NewCyclingComponent', () => {
  let component: NewCyclingComponent;
  let fixture: ComponentFixture<NewCyclingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCyclingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
