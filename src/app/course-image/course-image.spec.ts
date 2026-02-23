import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseImage } from './course-image';

describe('CourseImage', () => {
  let component: CourseImage;
  let fixture: ComponentFixture<CourseImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
