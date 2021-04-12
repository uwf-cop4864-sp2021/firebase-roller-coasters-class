import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateCoasterComponent } from './create-coaster.component';

describe('CreateCoasterComponent', () => {
  let component: CreateCoasterComponent;
  let fixture: ComponentFixture<CreateCoasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
