import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LMSLandingPageComponent } from './lms-landing-page.component';

describe('LMSLandingPageComponent', () => {
  let component: LMSLandingPageComponent;
  let fixture: ComponentFixture<LMSLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LMSLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LMSLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
