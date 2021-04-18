import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GETrequestComponent } from './getrequest.component';

describe('GETrequestComponent', () => {
  let component: GETrequestComponent;
  let fixture: ComponentFixture<GETrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GETrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GETrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
