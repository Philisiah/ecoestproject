import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProjects: any = [];

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getFeaturedForests();
  }

  getFeaturedForests() {
    this.dataService.getAllProjects().subscribe(
      data => {
        this.featuredProjects = data;
        console.log(data);
      }
    )
  }
}
