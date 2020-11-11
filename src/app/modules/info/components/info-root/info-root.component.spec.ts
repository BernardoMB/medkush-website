import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRootComponent } from './info-root.component';

describe('InfoRootComponent', () => {
  let component: InfoRootComponent;
  let fixture: ComponentFixture<InfoRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
