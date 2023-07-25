import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCiudadComponent } from './add-ciudad.component';

describe('AddCiudadComponent', () => {
  let component: AddCiudadComponent;
  let fixture: ComponentFixture<AddCiudadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCiudadComponent]
    });
    fixture = TestBed.createComponent(AddCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
