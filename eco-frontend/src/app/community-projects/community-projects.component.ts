import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-community-projects',
  templateUrl: './community-projects.component.html',
  styleUrls: ['./community-projects.component.css']
})
export class CommunityProjectsComponent implements OnInit {

  allProjects: any = {};

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.dataService.getAllProjects().subscribe(data => {
      this.allProjects = data;
    })
  }

}
