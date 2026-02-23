import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFroms } from './reactive-froms';

describe('ReactiveFroms', () => {
  let component: ReactiveFroms;
  let fixture: ComponentFixture<ReactiveFroms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFroms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFroms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
