import { Component, Input,  OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SapiantService } from 'src/app/sapiant.service';

@Component({
  selector: 'app-sapient-detail-page',
  templateUrl: './sapient-detail-page.component.html',
  styleUrls: ['./sapient-detail-page.component.css']
})
export class SapientDetailPageComponent implements OnInit {
  spaceXGallery: object;
  showNoData: boolean = false;
  _isLauchSucess: boolean=undefined;
  _isLandSuccess: boolean= undefined;
  _lauchYearValue:number;
  get isLauchSucess(): boolean {
    return this._isLauchSucess;
  }
  @Input() set isLauchSucess(value: boolean) {
    this._isLauchSucess = value;
    if (this._isLauchSucess) {
      this.sapiantService.launchSuccessRequest().subscribe((spaceXData) => {
        this.spaceXGallery = spaceXData;
      });
    }
    else if(this._isLauchSucess===false) {
      this.onloadData();
    }
  }
  get isLandSuccess(): boolean {
    return this._isLandSuccess;
  }
  @Input() set isLandSuccess(value: boolean) {
    this._isLandSuccess = value;
    if (this._isLandSuccess && this.isLauchSucess) {
      this.sapiantService.landSuccessRequest().subscribe((spaceXData) => {
        this.spaceXGallery = spaceXData;
      });
    }
    else if (this._isLandSuccess ===false || this.isLauchSucess ===false){
      this.onloadData();
    }
  }
  @Input() set lauchYearValue(value: number) {
    this._lauchYearValue =value;
    if (this._lauchYearValue) {      
         const launchYear= this.route.url;
        this.launchYear(launchYear.slice(1,launchYear.length));      
    }
  }
  get lauchYearValue() {
    return this._lauchYearValue
  }
  constructor(public sapiantService: SapiantService, public route: Router) { }
  ngOnInit(): void {
    this.onloadData();
  }
  onloadData() {
    this.sapiantService.onloadRequest().subscribe((spaceXData) => {
      this.spaceXGallery = spaceXData;
    });
  }
  launchYear(searchYear)
  {
    this.sapiantService.launchYearRequest(searchYear).subscribe((spaceXData) => {
      this.spaceXGallery = spaceXData;
      this.showNoData = spaceXData.length > 0 ? false : true;
    });
  }
}

