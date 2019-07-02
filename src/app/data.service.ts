import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IData } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private githubReposUrl: string = 'https://api.github.com/search/repositories';
  private githubParams = new HttpParams();

  private repoDataSubject = new BehaviorSubject([]);
  currentData = this.repoDataSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  setRepoData(obj: any) {
    this.repoDataSubject.next(obj)
  }

  search(term: string) {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: this.githubParams.set('q', term) } : {};

    return this.http.get(this.githubReposUrl, options).pipe(
      map(response => response['items']),
      //tap(data => console.log(`All: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
