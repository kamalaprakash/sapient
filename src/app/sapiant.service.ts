import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SapiantService {
  spaceXEndpoint: string = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private httpClient: HttpClient) { }
  onloadRequest() {
    return this.httpClient.get<any>(this.spaceXEndpoint);
  }
  launchSuccessRequest() {
    return this.httpClient.get<any>(this.spaceXEndpoint + '&launch_success=true');
  }
  landSuccessRequest() {
    return this.httpClient.get<any>(this.spaceXEndpoint + '&launch_success=true&land_success=true');
  }
  launchYearRequest(searchYear) {
    return this.httpClient.get<any>(this.spaceXEndpoint + '&launch_success=true&land_success=true&launch_year=' + searchYear);
  }
}
