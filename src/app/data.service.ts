import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IData } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private githubApiUrl = 'https://api.github.com';
  private githubParams = new HttpParams();
  private searchResults = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }

  getRepo(name: string, repo: string): Observable<IData> {
    return this.http.get<IData>(`${this.githubApiUrl}/repos/${name}/${repo}`).pipe(
      catchError(this.handleError)
    );
  }

  getRepoIssues(name: string, repo: string, state: string): Observable<IData> {
    return this.http.get<IData>(`${this.githubApiUrl}/search/issues?q=repo:${name}/${repo}+type:issue+state:${state}`).pipe(
      catchError(this.handleError)
    );
  }

  getSearchResults() {
    return this.searchResults.asObservable();
  }

  search(term: string): Observable<any> {
    term = term.trim();
    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: this.githubParams.set('q', term) } : {};

    return this.http.get<IData[]>(`${this.githubApiUrl}/search/repositories`, options).pipe(
      map(response => response),
      tap(data => this.searchResults.next(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
