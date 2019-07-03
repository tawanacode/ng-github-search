import { Component, Input, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @Input() openIssues: any;
  @Input() closedIssues: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels = ['open issues', 'closed issues'];
  public pieChartData;
  public pieChartType = 'pie';
  public pieChartLegend = true;

  constructor() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.pieChartData = [this.openIssues,this.closedIssues];
  }
}
