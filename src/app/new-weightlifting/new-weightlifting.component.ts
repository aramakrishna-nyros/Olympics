import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-weightlifting',
  templateUrl: './new-weightlifting.component.html',
  styleUrls: ['./new-weightlifting.component.scss']
})
export class NewWeightliftingComponent implements OnInit {
  model: any = {};
  years=[];
  isNewWeightLifting:any = true;
  constructor(
  	private dataService: DataService,
  	private router: Router
  	) { }

  ngOnInit() {
  	for (var i = 1890; i <= 2500; i++) {
  		this.years.push({"year":i})
  	}
  }

  newWeightliftMedal () {
  	console.log("in HomeComponent weightliftings")
  	console.log(this.model)
  	this.dataService.newWeightLiftingMedal(this.model.division, this.model.country, this.model.year)
            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate(['weightliftings']);
                },
                error => {
                    console.log("fail")
                });
  }

  getCyclingData(){
    this.router.navigate(['cyclings']);
  }
  
  backtoWeightliftings(){
    this.router.navigate(['weightliftings']);
  }

}
