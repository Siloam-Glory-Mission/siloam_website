import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfemaleComponent } from './totalfemale.component';

describe('TotalfemaleComponent', () => {
  let component: TotalfemaleComponent;
  let fixture: ComponentFixture<TotalfemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalfemaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalfemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
