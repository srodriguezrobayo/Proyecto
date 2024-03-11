import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpresaComponent } from './detalle-empresa.component';

describe('DetalleEmpresaComponent', () => {
  let component: DetalleEmpresaComponent;
  let fixture: ComponentFixture<DetalleEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleEmpresaComponent]
    });
    fixture = TestBed.createComponent(DetalleEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
