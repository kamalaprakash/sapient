import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapientDetailPageComponent } from './sapient-detail-page.component';

describe('SapientDetailPageComponent', () => {
  let component: SapientDetailPageComponent;
  let fixture: ComponentFixture<SapientDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapientDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapientDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
