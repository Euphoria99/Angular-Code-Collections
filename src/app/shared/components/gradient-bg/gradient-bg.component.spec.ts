import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBGComponent } from './gradient-bg.component';

describe('GradientBGComponent', () => {
  let component: GradientBGComponent;
  let fixture: ComponentFixture<GradientBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientBGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
