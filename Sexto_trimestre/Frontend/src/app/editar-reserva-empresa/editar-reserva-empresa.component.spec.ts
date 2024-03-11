import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaEmpresaComponent } from './editar-reserva-empresa.component';

describe('EditarReservaEmpresaComponent', () => {
  let component: EditarReservaEmpresaComponent;
  let fixture: ComponentFixture<EditarReservaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservaEmpresaComponent]
    });
    fixture = TestBed.createComponent(EditarReservaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
