import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllForests() {
    return this.http.get(`${this.apiUrl}/all_forests/`, httpOptions);
  }

  getForestDetail(id: any) {
    return this.http.get(`${this.apiUrl}/forest_detail/${id}/`, httpOptions)
  }

  getAllProjects() {
    return this.http.get(`${this.apiUrl}/all_projects/`, httpOptions);
  }

  getProjectDetail(id: any) {
    return this.http.get(`${this.apiUrl}/project_detail/${id}/`, httpOptions);
  }

  createProject(data: any) {
    return this.http.post(`${this.apiUrl}/add_project/`, {'data': data}, httpOptions);
  }

}
