import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, tap, map, switchMap } from 'rxjs/operators';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnChanges {
  model: any;
  searching: boolean = false;
  searchFailed: boolean = false;
  showResults: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnChanges(): void {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.dataService.search(term).pipe(
          map(data => data.map((d: { name: string; }) => d.name)),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  onEnter(): void {
    if (!this.searchFailed) {
       this.showResults = true;
       this.router.navigate(['/results']);
    }
  }
}
