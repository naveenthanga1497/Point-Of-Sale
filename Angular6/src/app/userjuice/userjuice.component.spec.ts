import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjuiceComponent } from './userjuice.component';

describe('UserjuiceComponent', () => {
  let component: UserjuiceComponent;
  let fixture: ComponentFixture<UserjuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserjuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserjuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
