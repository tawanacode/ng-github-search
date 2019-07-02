import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.scss']
})

export class SingleItemPageComponent implements OnInit {
  repoData: any;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.data.currentData.subscribe(data => {
      this.repoData = this.filterById(data, id);
    })
  }

  filterById(repos:any[], id:number){
    return repos.filter(repo => {
      if(repo.id === id) return repo;
    }).pop();
  }
}
