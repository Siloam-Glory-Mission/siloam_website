import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastupdatedComponent } from './lastupdated.component';

describe('LastupdatedComponent', () => {
  let component: LastupdatedComponent;
  let fixture: ComponentFixture<LastupdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastupdatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastupdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
