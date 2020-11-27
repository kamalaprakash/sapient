import { Component, OnInit } from '@angular/core';
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
  imageTitle: string = "test";
  spaceXGallery: object;
  lauchSucess: boolean = false;
  searchYear: number[]=null;
  buttonState:boolean[]=[true,false];
  showNoData:boolean=false;
  buttonStateClone:boolean[]=this.buttonState;
  constructor(public sapiantService: SapiantService) { }

  ngOnInit(): void {
    this.onloadData();
  }
  onloadData() {
    this.sapiantService.onloadRequest().subscribe((spaceXData) => {
      this.spaceXGallery = spaceXData;
    });
  }
  buttonStateChange(state){    
    const buttonFilterValue = this.buttonState.filter((btnState) => btnState.toString() === state);
    this.buttonState = buttonFilterValue.length>0 ? buttonFilterValue : this.buttonStateClone;
  }
  launchSuccess() {
    this.lauchSucess = true;
    this.sapiantService.launchSuccessRequest().subscribe((spaceXData) => {
      this.spaceXGallery = spaceXData;
    });
  }
  launchFailure() {
    this.lauchSucess = false;
    this.onloadData();
  }
  landFailure() {
    this.lauchSucess = false;
    this.onloadData();
  }

  landSuccess() {
    if (this.lauchSucess) {
      this.sapiantService.landSuccessRequest().subscribe((spaceXData) => {
        this.spaceXGallery = spaceXData;
      });
    }
  }
  filterLaunchYear(serachYear) {
    this.launchYear=this.launchYearClone;
    this.searchYear = this.launchYear.filter((year) => year === +serachYear);
    this.launchYear = this.searchYear.length>0 ? this.searchYear : this.launchYearClone;    
  }
  launchYearButtonClick(launchYear){
    if (launchYear) {
      this.sapiantService.launchYearRequest(launchYear).subscribe((spaceXData) => {
        this.spaceXGallery = spaceXData;        
        this.showNoData=spaceXData.length>0?false:true;
      });
    }
  }
}
