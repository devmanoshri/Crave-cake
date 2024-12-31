import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeMyDayComponent } from './cake-my-day.component';

describe('CakeMyDayComponent', () => {
  let component: CakeMyDayComponent;
  let fixture: ComponentFixture<CakeMyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeMyDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeMyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
