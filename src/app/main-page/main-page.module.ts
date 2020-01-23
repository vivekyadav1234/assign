import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainPageRoutingModule } from "./main-page-routing.module";
import { DataPageComponent } from "./data-page/data-page.component";
import { AgmCoreModule } from "@agm/core";
@NgModule({
  declarations: [DataPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC80kz3pNYbXNhwMdoBh4uQG31KznEuYEY"
    })
  ]
})
export class MainPageModule {}
