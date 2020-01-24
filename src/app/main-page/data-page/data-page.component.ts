import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../main-page/hero.service";
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from "node_modules/@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { from } from "rxjs";
declare var $: any;
declare var google: any;
@Component({
  selector: "app-data-page",
  templateUrl: "./data-page.component.html",
  styleUrls: ["./data-page.component.css"],
  providers: [HeroService]
})
export class DataPageComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.city();
    // this.getLocation();
  }
  city_data;
  city() {
    this.heroService.getUserlist().subscribe(
      res => {
        this.city_data = res;
        console.log(this.city_data);
      },
      error => {}
    );
  }
  state_data;
  locationValue;
  getVariablePriceForCM(val) {
    this.locationValue = val;
    console.log("vivek", val);
    this.heroService.getStateList(val).subscribe(
      res => {
        this.state_data = res;
        console.log(this.city_data);
        this.getLocation(this.locationValue);
      },
      error => {}
    );
  }
  test;
  lat;
  lng;
  currLat;
  currLng;
  getLocation(locationValue) {
    this.heroService.getLocation(locationValue).subscribe(
      res => {
        this.test = res;
        console.log(this.test.status);
        if (this.test.status === "REQUEST_DENIED") {
          this.currLat = 17.38714;
          this.currLng = 78.491684;
          alert(this.test.error_message);
        } else {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              this.currLat = position.coords.latitude;
              this.currLng = position.coords.longitude;
              console.log(this.currLng, "this.currLng");
            });
          } else {
            alert("You must enable Billing on the Google Cloud Project!");
          }
          this.lat = this.currLat;
          this.lng = this.currLng;
          console.log(this.lng, "this.lng");
          console.log(locationValue, "locationValue");
        }
      },
      error => {}
    );
  }
  getInputValue() {
    var inputValue = (<HTMLInputElement>document.getElementById("myInput"))
      .value;
    console.log(inputValue, "input values");
    this.heroService.getReference(inputValue).subscribe(
      res => {
        this.state_data = res;
        console.log(this.city_data);
      },
      error => {}
    );
  }
  openModal() {
    document.getElementById("MyModal").style.display = "block";
  }
}
