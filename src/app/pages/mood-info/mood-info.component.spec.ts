import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodInfoComponent } from './mood-info.component';

describe('MoodInfoComponent', () => {
  let component: MoodInfoComponent;
  let fixture: ComponentFixture<MoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
