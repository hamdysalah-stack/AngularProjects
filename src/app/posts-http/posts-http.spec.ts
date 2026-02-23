import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHttp } from './posts-http';

describe('PostsHttp', () => {
  let component: PostsHttp;
  let fixture: ComponentFixture<PostsHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
