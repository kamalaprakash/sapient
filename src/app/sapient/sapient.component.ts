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
  lauchSucess: boolean = undefined;
  landSucess: boolean = undefined;
  searchYear: number[] = null;
  landButtonState: boolean[] = [true, false];
  launchButtonState: boolean[] = [true, false];
  showNoData: boolean = false;
  lauchYearValue: number;
  buttonStateClone: boolean[] = this.landButtonState;
  constructor(public sapiantService: SapiantService,
    public router: Router, public route:ActivatedRoute) { }

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
  launchSuccess() {
    this.lauchSucess = true;
  }
  launchFailure() {
    this.lauchSucess = false;
  }
  landFailure() {
    this.landSucess = false;
  }
  landSuccess() {
    this.landSucess = true;
  }
  filterLaunchYear(serachYear) {
    this.launchYear = this.launchYearClone;
    this.searchYear = this.launchYear.filter((year) => year === +serachYear);
    this.launchYear = this.searchYear.length > 0 ? this.searchYear : this.launchYearClone;
  }
  launchYearButtonClick(launchYear) {
      this.router.navigate([launchYear])
      this.lauchYearValue =launchYear;
  }
}
