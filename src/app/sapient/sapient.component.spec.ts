import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapientComponent } from './sapient.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { SapiantService } from '../sapiant.service';
describe('SapientComponent', () => {
  let component: SapientComponent;
  let fixture: ComponentFixture<SapientComponent>;
  let service: SapiantService;
  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ SapientComponent ],
      imports: [
        HttpClientTestingModule],
      providers: [SapiantService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapientComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    service =  TestBed.inject(SapiantService);
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
