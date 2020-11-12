import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoingsoonComponent } from './comoingsoon.component';

describe('ComoingsoonComponent', () => {
  let component: ComoingsoonComponent;
  let fixture: ComponentFixture<ComoingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
