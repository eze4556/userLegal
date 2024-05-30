import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertIngresosPage } from './cert-ingresos.page';

describe('CertIngresosPage', () => {
  let component: CertIngresosPage;
  let fixture: ComponentFixture<CertIngresosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CertIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
