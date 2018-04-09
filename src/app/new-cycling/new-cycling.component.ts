import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-cycling',
  templateUrl: './new-cycling.component.html',
  styleUrls: ['./new-cycling.component.scss']
})
export class NewCyclingComponent implements OnInit {
  model: any = {};
  years=[];
  isNewCycling:any = true;
  constructor(
  	private dataService: DataService,
  	private router: Router
  	) { }

  ngOnInit() {
  	for (var i = 1890; i <= 2500; i++) {
  		this.years.push({"year":i})
  	}
  }

  newCyclingMedal () {
  	console.log("in HomeComponent")
  	console.log(this.model)
  	this.dataService.newCyclingMedal(this.model.division, this.model.country, this.model.year)
            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate(['cyclings']);
                },	
                error => {
                    console.log("fail")
                });
  } 

  getWeightLiftingData(){
    this.router.navigate(['weightliftings']);
  }
  backCyclings(){
    this.router.navigate(['cyclings']);
  }

}
