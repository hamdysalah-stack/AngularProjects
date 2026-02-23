import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElement } from './server-element';

describe('ServerElement', () => {
  let component: ServerElement;
  let fixture: ComponentFixture<ServerElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
