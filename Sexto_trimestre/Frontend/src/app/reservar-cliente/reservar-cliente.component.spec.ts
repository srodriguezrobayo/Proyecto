import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarClienteComponent } from './reservar-cliente.component';

describe('ReservarClienteComponent', () => {
  let component: ReservarClienteComponent;
  let fixture: ComponentFixture<ReservarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarClienteComponent]
    });
    fixture = TestBed.createComponent(ReservarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
