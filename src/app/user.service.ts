<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './app-model/candidate';
import { Panellist } from './app-model/panellist';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

>>>>>>> origin/master

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getCandidate(cid: number) : Observable<Candidate>{
    let url = "http://localhost:8383/searchCandidateId?cid="+cid;
    return this.http.get<Candidate>(url); 
  }

  getPanellist(pid: number) : Observable<Panellist>{
    let url = "http://localhost:8383/searchPanellistId?pid="+pid;
    return this.http.get<Panellist>(url); 
  }
=======
  getCandidates(): Observable<object>{
      let url= "http://localhost:8383/fetchAllCandidates";
      return this.http.get(url);
  }

  getCandidateById(id:number): Observable<object>{
    let url= "http://localhost:8383/searchCandidateId"+id;
    return this.http.get(url);
}

>>>>>>> origin/master
}
