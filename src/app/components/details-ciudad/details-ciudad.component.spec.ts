import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCiudadComponent } from './details-ciudad.component';

describe('DetailsCiudadComponent', () => {
  let component: DetailsCiudadComponent;
  let fixture: ComponentFixture<DetailsCiudadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCiudadComponent]
    });
    fixture = TestBed.createComponent(DetailsCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
