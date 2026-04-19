import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe({
      next: (rou) => {
        console.log(rou.getAll('listId'))
      },
      error: (error) => {

      }
    })
    const _getDataRoute = this.route.snapshot.data;
    console.log(_getDataRoute)
  }
}
