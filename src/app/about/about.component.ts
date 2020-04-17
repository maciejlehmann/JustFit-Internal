import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  dataSource: any
  dataSource2: any

  displayedColumns: string[] = ['id', 'name'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`http://localhost:8081/getAllActivityKinds`).subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource)
    })

    this.http.get(`http://localhost:8081/getAllActivityTypes`).subscribe(data => {
      this.dataSource2 = data
      console.log(this.dataSource2)
    })
  }
}
