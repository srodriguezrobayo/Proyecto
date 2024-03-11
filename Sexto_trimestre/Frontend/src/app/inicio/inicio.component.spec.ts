import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocComponent } from './inicio.component';

describe('IniciocComponent', () => {
  let component: IniciocComponent;
  let fixture: ComponentFixture<IniciocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciocComponent]
    });
    fixture = TestBed.createComponent(IniciocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
