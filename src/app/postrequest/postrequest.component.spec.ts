import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTrequestComponent } from './postrequest.component';

describe('POSTrequestComponent', () => {
  let component: POSTrequestComponent;
  let fixture: ComponentFixture<POSTrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSTrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
