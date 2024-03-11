import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntroComponent } from './entro.component';

describe('EntroComponent', () => {
  let component: EntroComponent;
  let fixture: ComponentFixture<EntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntroComponent]
    });
    fixture = TestBed.createComponent(EntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
