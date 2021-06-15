import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<object>{
      let url= "http://localhost:8383/fetchAllCandidates";
      return this.http.get(url);
  }

  getCandidateById(id:number): Observable<object>{
    let url= "http://localhost:8383/searchCandidateId"+id;
    return this.http.get(url);
}

}
