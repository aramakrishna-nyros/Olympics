import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCyclingComponent } from './new-cycling/new-cycling.component';
import { NewWeightliftingComponent } from './new-weightlifting/new-weightlifting.component';
import { WeightliftingComponent } from './weightlifting/weightlifting.component';
import { CyclingComponent } from './cycling/cycling.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'new/cycling', component: NewCyclingComponent },
	{ path: 'new/weightlifting', component: NewWeightliftingComponent },
	{ path: 'weightliftings', component: WeightliftingComponent },
	{ path: 'cyclings', component: CyclingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
