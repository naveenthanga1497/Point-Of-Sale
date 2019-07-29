import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfruitsComponent } from './userfruits.component';

describe('UserfruitsComponent', () => {
  let component: UserfruitsComponent;
  let fixture: ComponentFixture<UserfruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
