import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmaleComponent } from './totalmale.component';

describe('TotalmaleComponent', () => {
  let component: TotalmaleComponent;
  let fixture: ComponentFixture<TotalmaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalmaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalmaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
