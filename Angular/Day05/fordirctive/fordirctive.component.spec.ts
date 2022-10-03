import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordirctiveComponent } from './fordirctive.component';

describe('FordirctiveComponent', () => {
  let component: FordirctiveComponent;
  let fixture: ComponentFixture<FordirctiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordirctiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordirctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
