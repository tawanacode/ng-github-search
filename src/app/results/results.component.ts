import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IData } from '../data';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: IData[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSearchResults().subscribe(data => this.results = data);
  }

}
