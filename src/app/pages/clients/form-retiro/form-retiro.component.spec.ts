import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRetiroComponent } from './form-retiro.component';

describe('FormRetiroComponent', () => {
  let component: FormRetiroComponent;
  let fixture: ComponentFixture<FormRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
