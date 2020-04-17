import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface dataTable {
  id: number;
  name: string;
  classification: string;
  specification: string;
  broken: boolean;
  availability: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  dataSource: MatTableDataSource<dataTable>;
  dataSourceIdPicker: any;
  dataSource2:any

  dataById: object

  byId: number
  byName: string
  byClassification: string
  bySpecification: string

  displayedColumns: string[] = ['position', 'name', 'classification', 'specification', 'broken', 'availability'];

  constructor(private quoteService: QuoteService,private http: HttpClient) {}

  triggerName() {
    console.log(this.byName);
    this.http.get(`http://localhost:8080/equipment/getAllAvailableEquipmentByName?equipmentName=${this.byName}`).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
    })
  }

  triggerClassification() {
    console.log(this.byClassification);
    this.http.get(`http://localhost:8080/equipment/getAllAvailableEquipmentByClassification?classification=${this.byClassification}`).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
    })
  }

  triggerSpecification() {
    console.log(this.bySpecification);
    this.http.get(`http://localhost:8080/equipment/getAllAvailableEquipmentBySpecification?specification=${this.bySpecification}`).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
    })
  }

  ngOnInit() {
    this.http.get(`http://localhost:8080/equipment/getAll`).subscribe( (data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSourceIdPicker = data;
      console.log(this.dataSource);
    })

    this.http.get(`http://localhost:8080/equipment/getAllAvailable`).subscribe(data => {
      this.dataSource2 = data
      console.log(this.dataSource2)
    })
  }
}
