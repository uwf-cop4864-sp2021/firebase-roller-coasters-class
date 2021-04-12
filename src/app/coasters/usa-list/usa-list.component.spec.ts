import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsaListComponent } from './usa-list.component';

describe('UsaListComponent', () => {
  let component: UsaListComponent;
  let fixture: ComponentFixture<UsaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
