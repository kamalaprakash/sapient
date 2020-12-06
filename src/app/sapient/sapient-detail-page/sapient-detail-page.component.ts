import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SapiantService } from 'src/app/sapiant.service';

@Component({
  selector: 'app-sapient-detail-page',
  templateUrl: './sapient-detail-page.component.html',
  styleUrls: ['./sapient-detail-page.component.css']
})
export class SapientDetailPageComponent implements OnInit {
  spaceXGallery: object;
  showNoData: boolean = false;
  queryParam: string;
  constructor(public sapiantService: SapiantService, public routeUrl: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.onloadData();
  }
  onloadData() {
    this.route.queryParams.subscribe(params => {
      this.queryParam = Object.keys(params).length > 0 ? JSON.stringify(params).split(':').join('=').split(',').join('&').split('"').join('').toString().split('{').join('&').split('}').join('') : ' ';
      this.sapiantService.onloadRequest(this.queryParam).subscribe((spaceXData) => {
        this.spaceXGallery = spaceXData;
      });
    });
  }
}
