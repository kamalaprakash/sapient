import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SapientComponent } from './sapient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SapiantService } from '../sapiant.service';
describe('SapientComponent', () => {
  let component: SapientComponent;
  let fixture: ComponentFixture<SapientComponent>;
  let service: SapiantService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SapientComponent],
      imports: [
        HttpClientTestingModule, RouterTestingModule],
      providers: [SapiantService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapientComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SapiantService);
    component.buttonStateClone = [true, false];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Sapient service is caling', () => {
    expect(service).toBeTruthy();
  });
  it('launchButton true clicked', () => {
    component.launchButtonStateChange('true');
    console.log('component.launchButtonState', component.launchButtonState);
    expect(component.launchButtonState[0]).toBeTruthy();
  });

  it('launchButton false clicked', () => {
    component.launchButtonStateChange('false');
    console.log('component.launchButtonState', component.launchButtonState);
    expect(component.launchButtonState[0]).toBeFalse();
  });

  it('landButton true clicked', () => {
    component.landButtonStateChange('true');
    expect(component.landButtonState[0]).toBeTrue();
  });

  it('landButton false clicked', () => {
    component.landButtonStateChange('false');
    expect(component.landButtonState[0]).toBeFalse();
  });
});
