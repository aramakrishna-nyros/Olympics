import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result: any;
  constructor(private http: HttpClient) { }

  getCyclings() {
  	return this.http.get("/api/cyclings")
  		.map(result => this.result = JSON.stringify(result['data']));
  }

  getWeightLiftings () {
  	return this.http.get("/api/weightliftings")
  		.map(result => this.result = JSON.stringify(result['data']));	
  }

  newCyclingMedal(division: string, country: string, year: string) {
  	return this.http.post<any>('/api/new_cycling', { division: division, country: country, year:year})
            .map(cycling => {
                if (cycling) {
                	this.result = JSON.stringify(cycling['result']);
                }
                return cycling;
            });

  }

  newWeightLiftingMedal(division: string, country: string, year: string) {
  	return this.http.post<any>('/api/new_weightlifting', { division: division, country: country, year:year})
            .map(weightlifting => {
                if (weightlifting) {
                }
                return weightlifting;
            });

  }

}
