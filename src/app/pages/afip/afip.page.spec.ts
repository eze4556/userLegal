import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfipPage } from './afip.page';

describe('AfipPage', () => {
  let component: AfipPage;
  let fixture: ComponentFixture<AfipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
