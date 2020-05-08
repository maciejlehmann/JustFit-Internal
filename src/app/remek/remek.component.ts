import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface dataTable {
  id: number;
  name: string;
  durationInMonths: string;
  contract: boolean;
  description: string;
  price: number;
  active: boolean;
  avabileClasses: string;
}

@Component({
  selector: 'app-remek',
  templateUrl: './remek.component.html',
  styleUrls: ['./remek.component.scss']
})
export class RemekComponent implements OnInit {

  dataSource: any
  byId: number
  dataSourceIdPickerByName: any;
  dataSource2: MatTableDataSource<dataTable>;

  displayedColumns: string[] = ['id', 'name', 'durationInMonths', 'contract', 'description', 'price', 'active', 'avabileClasses'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`https://justfit-products.herokuapp.com/products`).subscribe(data => {
      this.dataSource = data
    })
  }

  triggerId() {
    console.log(this.byId);
    this.http.get(`https://justfit-products.herokuapp.com/products/${this.byId}`).subscribe((data: any) => {
      
      this.dataSource = data;
     
    })
  }

}
