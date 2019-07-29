import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbuyingComponent } from './userbuying.component';

describe('UserbuyingComponent', () => {
  let component: UserbuyingComponent;
  let fixture: ComponentFixture<UserbuyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbuyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
