import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Github Search';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onKeyDown(): void {
       this.router.navigate(['/results']);
  }

}
