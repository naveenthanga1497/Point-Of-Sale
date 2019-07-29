import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermilComponent } from './usermil.component';

describe('UsermilComponent', () => {
  let component: UsermilComponent;
  let fixture: ComponentFixture<UsermilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
