import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutrequestComponent } from './putrequest.component';

describe('PutrequestComponent', () => {
  let component: PutrequestComponent;
  let fixture: ComponentFixture<PutrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
