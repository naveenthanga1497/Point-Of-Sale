import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserseasonalComponent } from './userseasonal.component';

describe('UserseasonalComponent', () => {
  let component: UserseasonalComponent;
  let fixture: ComponentFixture<UserseasonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserseasonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserseasonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
