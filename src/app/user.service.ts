import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './app-model/candidate';
import { Panellist } from './app-model/panellist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCandidate(cid: number) : Observable<Candidate>{
    let url = "http://localhost:8383/searchCandidateId?cid="+cid;
    return this.http.get<Candidate>(url); 
  }

  getPanellist(pid: number) : Observable<Panellist>{
    let url = "http://localhost:8383/searchPanellistId?pid="+pid;
    return this.http.get<Panellist>(url); 
  }
}