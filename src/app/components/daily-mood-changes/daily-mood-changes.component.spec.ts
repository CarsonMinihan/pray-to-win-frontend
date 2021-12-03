import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodChangesComponent } from './daily-mood-changes.component';

describe('DailyMoodChangesComponent', () => {
  let component: DailyMoodChangesComponent;
  let fixture: ComponentFixture<DailyMoodChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMoodChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMoodChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
