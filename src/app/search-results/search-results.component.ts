import { Component, OnChanges, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {
  @Input() searchResults: any [];

  constructor(private data: DataService) { }

  ngOnChanges(): void {
    this.data.setRepoData(this.searchResults);
  }
}
