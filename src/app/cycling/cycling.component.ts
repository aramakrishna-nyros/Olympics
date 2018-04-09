import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cycling',
  templateUrl: './cycling.component.html',
  styleUrls: ['./cycling.component.scss']
})
export class CyclingComponent implements OnInit {
  
  isCyclingsAvailable = true;
  cyclings: Array<any>
  constructor(
  	private dataService: DataService,
  	private router: Router
  	) { }

  ngOnInit() {
    this.getCyclingData();
  }

	getCyclingData() {
  	this.dataService.getCyclings()
		.subscribe(res => this.cyclings = JSON.parse(res));
	}
  gotoWeightLiftings(){
    this.router.navigate(['weightliftings']);
  }

  newCycling(){
    this.router.navigate(['new/cycling']);
  }
  
}
