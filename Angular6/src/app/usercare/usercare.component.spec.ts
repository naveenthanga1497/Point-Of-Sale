import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercareComponent } from './usercare.component';

describe('UsercareComponent', () => {
  let component: UsercareComponent;
  let fixture: ComponentFixture<UsercareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
