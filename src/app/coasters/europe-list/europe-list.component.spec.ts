import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EuropeListComponent } from './europe-list.component';

describe('EuropeListComponent', () => {
  let component: EuropeListComponent;
  let fixture: ComponentFixture<EuropeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
