import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELETErequestComponent } from './deleterequest.component';

describe('DELETErequestComponent', () => {
  let component: DELETErequestComponent;
  let fixture: ComponentFixture<DELETErequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELETErequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELETErequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
