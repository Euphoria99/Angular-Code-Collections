import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimGradientBGComponent } from './anim-gradient-bg.component';

describe('AnimGradientBGComponent', () => {
  let component: AnimGradientBGComponent;
  let fixture: ComponentFixture<AnimGradientBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimGradientBGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimGradientBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
