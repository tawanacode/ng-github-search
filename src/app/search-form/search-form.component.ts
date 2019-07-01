import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, tap, switchMap} from 'rxjs/operators';

import { DataService } from '../data.service';
import { IData } from '../data';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  providers: [DataService],
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  githubData: IData[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.dataService.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

}
