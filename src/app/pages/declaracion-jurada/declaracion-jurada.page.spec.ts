import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclaracionJuradaPage } from './declaracion-jurada.page';

describe('DeclaracionJuradaPage', () => {
  let component: DeclaracionJuradaPage;
  let fixture: ComponentFixture<DeclaracionJuradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionJuradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
