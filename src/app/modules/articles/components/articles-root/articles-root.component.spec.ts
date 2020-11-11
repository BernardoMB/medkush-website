import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesRootComponent } from './articles-root.component';

describe('ArticlesRootComponent', () => {
  let component: ArticlesRootComponent;
  let fixture: ComponentFixture<ArticlesRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
