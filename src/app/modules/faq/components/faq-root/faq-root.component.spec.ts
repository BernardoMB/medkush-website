import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqRootComponent } from './faq-root.component';

describe('FaqRootComponent', () => {
  let component: FaqRootComponent;
  let fixture: ComponentFixture<FaqRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
