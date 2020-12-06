import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SapiantService {
  spaceXEndpoint: string = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private httpClient: HttpClient) { }
  onloadRequest(queryParam) {
    if(queryParam){
    return this.httpClient.get<any>(this.spaceXEndpoint+queryParam);
  }
  }
}
