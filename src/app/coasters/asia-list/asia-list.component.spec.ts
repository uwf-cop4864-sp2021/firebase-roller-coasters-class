import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AsiaListComponent } from './asia-list.component';

describe('AsiaListComponent', () => {
  let component: AsiaListComponent;
  let fixture: ComponentFixture<AsiaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
