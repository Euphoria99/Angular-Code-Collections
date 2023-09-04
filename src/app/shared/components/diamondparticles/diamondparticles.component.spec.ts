import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondparticlesComponent } from './diamondparticles.component';

describe('DiamondparticlesComponent', () => {
  let component: DiamondparticlesComponent;
  let fixture: ComponentFixture<DiamondparticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondparticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondparticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
