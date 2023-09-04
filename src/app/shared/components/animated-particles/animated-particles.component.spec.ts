import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedParticlesComponent } from './animated-particles.component';

describe('AnimatedParticlesComponent', () => {
  let component: AnimatedParticlesComponent;
  let fixture: ComponentFixture<AnimatedParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedParticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
