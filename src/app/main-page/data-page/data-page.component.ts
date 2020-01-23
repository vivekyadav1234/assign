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
  getLocation(locationValue) {
    this.lat = 18.987807;
    this.lng = 72.836447;
    console.log(locationValue, "locationValue");
    // });
    // var autocomplete = new google.maps.places.Autocomplete();
    // google.maps.event.addListener(autocomplete, "place_changed", function() {
    //   var place = autocomplete.getPlace();
    //   console.log(locationValue, "vivek");
    //   locationValue = place.name;
    //   locationValue = place.geometry.location.lat();
    //   locationValue = place.geometry.location.lng();
    //   console.log(location);
    // });
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
}
