import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotbaptisedComponent } from './notbaptised.component';

describe('NotbaptisedComponent', () => {
  let component: NotbaptisedComponent;
  let fixture: ComponentFixture<NotbaptisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotbaptisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotbaptisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
