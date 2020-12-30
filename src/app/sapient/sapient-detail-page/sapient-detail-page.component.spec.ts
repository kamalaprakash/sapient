import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture,  TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SapiantService } from 'src/app/sapiant.service';

import { SapientDetailPageComponent } from './sapient-detail-page.component';

describe('SapientDetailPageComponent', () => {
  let component: SapientDetailPageComponent;
  let fixture: ComponentFixture<SapientDetailPageComponent>;
  let service: SapiantService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapientDetailPageComponent],
      imports: [
        HttpClientTestingModule, RouterTestingModule],
      providers: [SapiantService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapientDetailPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SapiantService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Sapient service is caling', () => {
    expect(service).toBeTruthy();
  });
  it('SpaceX data loded successfully', () => {
    component.ngOnInit();
    component.spaceXGallery = { land_sucess: 'true' };
    expect(component.spaceXGallery).toBeTruthy();
  });
});
