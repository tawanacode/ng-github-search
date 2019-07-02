import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, tap, map, switchMap} from 'rxjs/operators';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {

  model: any;
  searching: boolean = false;
  searchFailed: boolean = false;
  githubData: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(10),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.dataService.search(term).pipe(
          tap(data => this.githubData = data),
          map(data => data.map((d: { name: string; }) => d.name)),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );
}
