import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptisedComponent } from './baptised.component';

describe('BaptisedComponent', () => {
  let component: BaptisedComponent;
  let fixture: ComponentFixture<BaptisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaptisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaptisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
