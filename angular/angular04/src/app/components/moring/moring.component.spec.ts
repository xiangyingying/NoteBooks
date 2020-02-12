import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoringComponent } from './moring.component';

describe('MoringComponent', () => {
  let component: MoringComponent;
  let fixture: ComponentFixture<MoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
