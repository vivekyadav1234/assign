import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataPageComponent } from "./main-page/data-page/data-page.component";
import { from } from "rxjs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, DataPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDs1Szaf2Ur_wqtg4g8pdLUBTbuhKTXo-k"
    })
    // apiKey:'Madathukulam',
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
