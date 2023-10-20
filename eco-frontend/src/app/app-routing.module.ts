import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MapComponent} from "./map/map.component";
import {CommunityProjectsComponent} from "./community-projects/community-projects.component";
import {RealTimeDashboardComponent} from "./real-time-dashboard/real-time-dashboard.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'map', component: MapComponent},
  {path: 'commnunity-projects', component: CommunityProjectsComponent},
  {path: 'real-time-data', component: RealTimeDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
