import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SapiantService } from '../sapiant.service';

@Component({
  selector: 'app-sapient',
  templateUrl: './sapient.component.html',
  styleUrls: ['./sapient.component.css']
})
export class SapientComponent implements OnInit {
  launchYear: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launchYearClone: number[] = this.launchYear;
  isLaunchYearButtonClick: boolean = undefined;
  launchSuccess: boolean = undefined;
  landSuccess: boolean = undefined;
  searchYear: number[] = null;
  landButtonState: boolean[] = [true, false];
  launchButtonState: boolean[] = [true, false];
  showNoData = false;
  launchYearValue;
  buttonStateClone: boolean[] = this.landButtonState;
  spaceXHeader = 'SpaceX Launch Programs';
  constructor(public sapiantService: SapiantService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  launchButtonStateChange(state): void {
    const buttonFilterValue = this.buttonStateClone.filter((btnState) => btnState.toString() === state);
    this.launchButtonState = buttonFilterValue.length > 0 ? buttonFilterValue : this.buttonStateClone;
  }
  landButtonStateChange(state): void {
    const buttonFilterValue = this.buttonStateClone.filter((btnState) => btnState.toString() === state);
    this.landButtonState = buttonFilterValue.length > 0 ? buttonFilterValue : this.buttonStateClone;
  }
  isLaunchSuccess(): void {
    this.launchSuccess = true;
    this.filterApplyInUrl();
  }
  isLaunchFailure(): void {
    this.launchSuccess = false;
    this.filterApplyInUrl();
  }
  isLandFailure(): void {
    this.landSuccess = false;
    this.filterApplyInUrl();
  }
  isLandSuccess(): void {
    this.landSuccess = true;
    this.filterApplyInUrl();
  }
  filterApplyInUrl(): void {
    if (this.launchSuccess && this.landSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          launch_success: 'true', land_success: 'true',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.launchSuccess && this.landSuccess) {
      this.router.navigate(['/'], { queryParams: { launch_success: 'true', land_success: 'true' } });
    } else if (this.launchSuccess && !this.landSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          land_success: 'false',
          launch_success: 'true',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.landSuccess && !this.launchSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          land_success: 'true',
          launch_success: 'false',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.launchSuccess && !this.landSuccess) {
      this.router.navigate(['/'], { queryParams: { land_success: 'true', launch_success: 'true' } });
    } else if (!this.launchSuccess && this.landSuccess) {
      this.router.navigate(['/'], { queryParams: { land_success: 'true', launch_success: 'false' } });
    } else if (this.launchYearValue) {
      this.router.navigate(['/'], { queryParams: { launch_Year: this.launchYearValue.toString() } });
    } else {
      this.router.navigate(['/']);
    }
  }
  filterLaunchYear(serachYear): void {
    this.launchYear = this.launchYearClone;
    this.searchYear = this.launchYear.filter((year) => year === +serachYear);
    this.launchYear = this.searchYear.length > 0 ? this.searchYear : this.launchYearClone;
  }
  launchYearButtonClick(launchYear): void {
    this.launchYearValue = launchYear;
    this.filterApplyInUrl();
  }
  reset(): void {
    this.launchSuccess = undefined;
    this.landSuccess = undefined;
    this.launchYearValue = undefined;
    this.filterApplyInUrl();
  }
}
