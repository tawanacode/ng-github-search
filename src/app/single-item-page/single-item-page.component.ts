import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.scss']
})

export class SingleItemPageComponent implements OnInit {
  repoData: any;
  closedIssues: number;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    let repo = this.route.snapshot.paramMap.get('repo');
    this.data.getRepo(name, repo).subscribe(data => {
      this.repoData = data;
    })

    this.data.getRepoIssues(name, repo, 'closed').subscribe(
      data => this.closedIssues = data.total_count)
  }

  onBack():void {
    this.router.navigate(['/search-page']);
  }
}
