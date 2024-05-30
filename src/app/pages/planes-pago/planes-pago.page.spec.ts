import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanesPagoPage } from './planes-pago.page';

describe('PlanesPagoPage', () => {
  let component: PlanesPagoPage;
  let fixture: ComponentFixture<PlanesPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
