import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SapiantService } from '../sapiant.service';

@Component({
  selector: 'app-sapient',
  templateUrl: './sapient.component.html',
  styleUrls: ['./sapient.component.css']
})
export class SapientComponent implements OnInit {
  spaceXHeader: string = "SpaceX Launch Programs";
  launchYear: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launchYearClone: number[] = this.launchYear;
  isLaunchYearButtonClick: boolean = undefined;
  launchSuccess: boolean = undefined;
  landSuccess: boolean = undefined;
  searchYear: number[] = null;
  landButtonState: boolean[] = [true, false];
  launchButtonState: boolean[] = [true, false];
  showNoData: boolean = false;
  launchYearValue: number;
  buttonStateClone: boolean[] = this.landButtonState;
  constructor(public sapiantService: SapiantService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {

  }
  launchButtonStateChange(state): void {
    const buttonFilterValue = this.buttonStateClone.filter((btnState) => btnState.toString() === state);
    this.launchButtonState = buttonFilterValue.length > 0 ? buttonFilterValue : this.buttonStateClone;
  }
  landButtonStateChange(state): void {
    const buttonFilterValue = this.buttonStateClone.filter((btnState) => btnState.toString() === state);
    this.landButtonState = buttonFilterValue.length > 0 ? buttonFilterValue : this.buttonStateClone;
  }
  isLaunchSuccess() {
    this.launchSuccess = true;
    this.filterApplyInUrl();
  }
  isLaunchFailure() {
    this.launchSuccess = false;
    this.filterApplyInUrl();
  }
  isLandFailure() {
    this.landSuccess = false;
    this.filterApplyInUrl();
  }
  isLandSuccess() {
    this.landSuccess = true;
    this.filterApplyInUrl();
  }
  filterApplyInUrl() {
    if (this.launchSuccess && this.landSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          launch_success: 'true', land_success: 'true',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.launchSuccess && this.landSuccess) {
      this.router.navigate(['/'], { queryParams: { launch_success: 'true', land_success: 'true' } });
    } else if (this.launchSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          launch_success: 'true',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.landSuccess && this.launchYearValue) {
      this.router.navigate(['/'], {
        queryParams: {
          land_success: 'true',
          launch_Year: this.launchYearValue.toString()
        }
      });
    } else if (this.launchSuccess) {
      this.router.navigate(['/'], { queryParams: { launch_success: 'true' } });
    } else if (this.landSuccess) {
      this.router.navigate(['/'], { queryParams: { land_success: 'true' } });
    } else if (this.launchYearValue) {
      this.router.navigate(['/'], { queryParams: { launch_Year: this.launchYearValue.toString() } });
    } else {
      this.router.navigate(['/']);
    }
  }
  filterLaunchYear(serachYear) {
    this.launchYear = this.launchYearClone;
    this.searchYear = this.launchYear.filter((year) => year === +serachYear);
    this.launchYear = this.searchYear.length > 0 ? this.searchYear : this.launchYearClone;
  }
  launchYearButtonClick(launchYear) {
    this.launchYearValue = launchYear;
    this.filterApplyInUrl();
  }
  reset(event) {
    console.log(event);
    this.launchSuccess = false;
    this.landSuccess = false;
    this.launchYearValue = undefined;
    this.filterApplyInUrl();
  }
}
