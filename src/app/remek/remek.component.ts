import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-remek',
  templateUrl: './remek.component.html',
  styleUrls: ['./remek.component.scss']
})
export class RemekComponent implements OnInit {

  dataSource: any

  addForm!: FormGroup

  arrClasses = ['Basic', 'Premium', 'VIP'];

  displayedColumns: string[] = ['id', 'name', 'durationInMonths', 'contract', 'description', 'price', 'active', 'avabileClasses'];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm()
  }

  async init() {
    this.http.get(`https://justfit-products.herokuapp.com/products`).subscribe(data => {
      this.dataSource = data
    })
  }

  ngOnInit(): void {
    this.init()
  }

  private createForm() {
    this.addForm = this.formBuilder.group({
      name: new FormControl("", {validators: [Validators.required]}),
      durationInMonths: new FormControl("", {validators: [Validators.required]}),
      contract: new FormControl("", {validators: [Validators.required]}),
      description: new FormControl("", {validators: [Validators.required]}),
      price: new FormControl("", {validators: [Validators.required]}),
      active: new FormControl(false),
      avabileClasses: new FormControl("", {validators: [Validators.required]})
    })
  }

  addProduct() {
    this.http.post(`https://justfit-products.herokuapp.com/products`, this.addForm.value).subscribe()
  }

  changeActive(data: any) {
     this.http.patch(`https://justfit-products.herokuapp.com/products/${data}`, data).subscribe(() => this.init())
    }
}
