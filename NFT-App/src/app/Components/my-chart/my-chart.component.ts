import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements AfterViewInit, OnInit {
  @ViewChild('acquisitions') acquisitions!: ElementRef
  @ViewChild('donut') donut!: ElementRef
  @ViewChild('polar') polar!: ElementRef

  chart: Chart | undefined
  data: number[] = [4,8,10,14,20]
  
  // data = [
  //   { year: 2010,
  //     count: 10,
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgba(255, 99, 132, 1)',
  //   },
  //   { year: 2011,
  //     count: 20,
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //     borderColor: 'rgba(54, 162, 235, 1)',
  //   },
  //   { year: 2012,
  //     count: 15,
  //     backgroundColor: 'rgba(255, 206, 86, 0.2)',
  //     borderColor: 'rgba(255, 206, 86, 1)',
  //   },
  //   { year: 2013,
  //     count: 25,
  //     backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //     borderColor: 'rgba(75, 192, 192, 1)',
  //   },
  //   { year: 2014,
  //     count: 22,
  //     backgroundColor: 'rgba(153, 102, 255, 0.2)',
  //     borderColor: 'rgba(153, 102, 255, 1)',
  //   },
  //   { year: 2015,
  //     count: 30,
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgba(255, 99, 132, 1)',
  //   },
  //   // { year: 2016,
  //   //   count: 28,
  //   //   backgroundColor: 'rgba(255, 159, 64, 0.2)',
  //   //   borderColor: 'rgba(255, 159, 64, 1)',
  //   // },
  // ];
  constructor(private common: CommonService) {}
  ngOnInit(): void {
    
  }

  // addData(chart: any, label: any, data: any) {
  //   chart.data.labels.push(label);
  //   chart.data.datasets.forEach((dataset: any) => {
  //       dataset.data.push(data);
  //   });
  //   chart.update();
  // }

  // createChart() {
  //   let chart = new Chart(this.acquisitions.nativeElement, {
  //     type: 'bar',
  //     // options: {
  //     //   animation: false,
  //     //   plugins: {
  //     //     legend: {
  //     //       display: false
  //     //     },
  //     //     tooltip: {
  //     //       enabled: false
  //     //     }
  //     //   }
  //     // },
  //     data: {
  //       labels: this.data.map(row => row.year),
  //       datasets: [
  //         {
  //           label: 'Acquisitions by year',
  //           data: this.data.map(row => row.count),
  //           backgroundColor: this.data.map(row => row.backgroundColor),
  //           borderColor: this.data.map(row => row.borderColor),
  //           borderWidth: 1,
  //         }
  //       ]
  //     }
  //   });
  // }

  ngAfterViewInit() {
    this.chart = new Chart(this.acquisitions.nativeElement, {
      type: 'bar',
      data: {
        labels: ['2000', '2010', '2020', '2030', '2040'],
        datasets: [{
          label: 'Randomize',
          data: this.data,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth : 1,
        }]
      },
      options: {}
    });

    this.common.chartEmitter.subscribe(x => {
      if (this.chart) {
        this.chart.data.datasets[0].data = x;
        this.chart.update();
      }
    });

    new Chart(this.donut.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });
    new Chart(this.polar.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
          borderColor: 'rgb(255,255,255)'
        }]
      },
      options: {}
    });
  }
}
