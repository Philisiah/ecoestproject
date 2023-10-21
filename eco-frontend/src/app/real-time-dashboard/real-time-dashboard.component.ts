import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-real-time-dashboard',
  templateUrl: './real-time-dashboard.component.html',
  styleUrls: ['./real-time-dashboard.component.css']
})
export class RealTimeDashboardComponent implements OnInit {
  allForests: any = [];

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getAllForests();
  }

  getAllForests() {
    this.dataService.getAllForests().subscribe(
      data => {
        this.allForests = data;
        console.log(data);
      }
    )
  }

}
