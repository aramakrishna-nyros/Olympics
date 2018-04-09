import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weightlifting',
  templateUrl: './weightlifting.component.html',
  styleUrls: ['./weightlifting.component.scss']
})
export class WeightliftingComponent implements OnInit {
  
  isWeightLiftingAvailable = true;
  weightliftings: Array<any>
  constructor(
  	private dataService: DataService,
  	private router: Router
  	) { }

  ngOnInit() {
    this.getWeightLiftingData();
  }
  
  getWeightLiftingData () {
  	this.dataService.getWeightLiftings()
  		.subscribe(res => this.weightliftings = JSON.parse(res));
  }

  newWeightLifting(){
    this.router.navigate(['new/weightlifting']);
  }

  gotoCyclings(){
    this.router.navigate(['cyclings']);
  }

}
