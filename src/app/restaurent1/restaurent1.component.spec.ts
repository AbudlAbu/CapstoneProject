import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurent1Component } from './restaurent1.component';

describe('Restaurent1Component', () => {
  let component: Restaurent1Component;
  let fixture: ComponentFixture<Restaurent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
