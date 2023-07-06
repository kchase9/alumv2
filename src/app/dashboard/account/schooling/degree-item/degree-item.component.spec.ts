import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeItemComponent } from './degree-item.component';

describe('DegreeItemComponent', () => {
  let component: DegreeItemComponent;
  let fixture: ComponentFixture<DegreeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreeItemComponent]
    });
    fixture = TestBed.createComponent(DegreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
