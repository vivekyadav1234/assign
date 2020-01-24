import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { from } from "rxjs";
interface Location {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: "root"
})
export class HeroService {
  apiUrl = "https://indian-cities-api-nocbegfhqg.now.sh/cities";
  //apiUrl1="https://indian-cities-api-nocbegfhqg.now.sh/cities/District=value"
  constructor(private http: HttpClient) {}
  getUserlist() {
    return this.http.get(this.apiUrl);
  }
  getStateList(value) {
    console.log("yadav", value);
    let params1 = new HttpParams().set("District", value);
    return this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities", {
      params: params1
    });
  }
  getReference(refer) {
    console.log("yadav", refer);
    let params2 = new HttpParams().set("City_like", refer);
    return this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities", {
      params: params2
    });
  }
  getLocation(Location) {
    let params3 = new HttpParams().set("address", Location);
    // let params3 = new HttpParams().set("key",'AIzaSyArpJCJZM2zQ4NTB0Qh09RNlgOrUOP86Jo');
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: params3
    });
  }
}
