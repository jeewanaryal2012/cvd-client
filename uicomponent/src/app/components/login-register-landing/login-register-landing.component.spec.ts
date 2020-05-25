import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterLandingComponent } from './login-register-landing.component';

describe('LoginRegisterLandingComponent', () => {
  let component: LoginRegisterLandingComponent;
  let fixture: ComponentFixture<LoginRegisterLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
