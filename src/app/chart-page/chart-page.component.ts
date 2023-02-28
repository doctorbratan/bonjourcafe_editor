import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import Chart from 'chart.js/auto';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit, AfterContentInit {
  

  loading: boolean = false
  seleted_date: string = "today"

  chart: any

  constructor(
    private chartService: ChartService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.checkSelected();
  }

  ngAfterContentInit(): void {
    this.findChart();
  }

  checkSelected() {
    const candidate =  this.route.snapshot.queryParamMap.get('selected');

    if (candidate) {
      this.seleted_date = candidate
    }
  }

  findChart() {
    this.loading = true

    this.chartService.getChart(this.seleted_date).subscribe(
      (data) => {
        this.loading = false;
        this.createChart(data);
      },
      error => {
        console.warn(error)
      }
    )
  }

  createChart(data: any){

    if (!this.chart) {

      this.chart = new Chart(
        "chart",
        {
          type: 'line',
          data,
          options: 
          {
            responsive: true,
            aspectRatio: 2.5
          }
        }
      ) 

    } else {
      this.chart.data = data
      this.chart.update()
    }

  } 

}

