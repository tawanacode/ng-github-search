import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { mergeMap } from 'rxjs/operators';

import { DataService } from '../data.service';
import { IData } from '../data';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  selected: string;
  noResult = false;
  githubData: IData[];
  errorMessage: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  getDataFromGitub(event: TypeaheadMatch) {

    return this.dataService.getData(event.value).subscribe(
      (data: any) => {
        this.githubData = data.items;
      },
      error => this.errorMessage = <any>error
      );
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

}
