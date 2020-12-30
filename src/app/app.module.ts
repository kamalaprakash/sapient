import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SapientComponent } from './sapient/sapient.component';
import { SapiantService } from './sapiant.service';
import { HttpClientModule } from '@angular/common/http';
import { SapientDetailPageComponent } from './sapient/sapient-detail-page/sapient-detail-page.component';
import { SapientRouteRoutingModule } from './sapient-route/sapient-route-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SapientComponent,
    SapientDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SapientRouteRoutingModule
  ],
  providers: [SapiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
