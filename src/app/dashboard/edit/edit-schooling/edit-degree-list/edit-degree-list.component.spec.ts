import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDegreeListComponent } from './edit-degree-list.component';

describe('EditDegreeListComponent', () => {
  let component: EditDegreeListComponent;
  let fixture: ComponentFixture<EditDegreeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDegreeListComponent]
    });
    fixture = TestBed.createComponent(EditDegreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
