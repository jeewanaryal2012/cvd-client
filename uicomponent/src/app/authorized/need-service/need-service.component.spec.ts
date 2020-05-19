import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedServiceComponent } from './need-service.component';

describe('NeedServiceComponent', () => {
  let component: NeedServiceComponent;
  let fixture: ComponentFixture<NeedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
