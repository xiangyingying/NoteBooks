import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightComponent } from './night.component';

describe('NightComponent', () => {
  let component: NightComponent;
  let fixture: ComponentFixture<NightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
