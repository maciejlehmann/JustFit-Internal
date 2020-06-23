import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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
  dataSourceIdPickerByName: any;
  dataSourceIdPickerByClass: any;
  dataSourceIdPickerBySpec: any;

  dataSource2:MatTableDataSource<dataTable>;

  nameArr: any
  classArr: any
  specArr: any

  dataById: object

  byId: number
  byName: string
  byClassification: string
  bySpecification: string

  addForm!: FormGroup

  arrClassification = ['PILKI', 'TRENINGSILOWY', 'LAWKIDOCWICZEN', 'KARDIO', 'MATY'];

  displayedColumns: string[] = ['position', 'name', 'classification', 'specification', 'broken', 'availability'];

  constructor( private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm()
  }

  triggerName() {
    console.log(this.byName);
    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAllAvailableEquipmentByName?equipmentName=${this.byName}`).subscribe((data: any) => {
      this.dataSource2 = new MatTableDataSource(data);
    })
  }

  triggerClassification() {
    console.log(this.byClassification);
    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAllAvailableEquipmentByClassification?stClassification=${this.byClassification}`).subscribe((data: any) => {
      this.dataSource2 = new MatTableDataSource(data);
    })
  }

  triggerSpecification() {
    console.log(this.bySpecification);
    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAllAvailableEquipmentBySpecification?specification=${this.bySpecification}`).subscribe((data: any) => {
      this.dataSource2 = new MatTableDataSource(data);
    })
  }

  async init() {
    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAll`).subscribe( (data: any) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngOnInit() {
    this.init()

    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAllAvailable`).subscribe((data: any) => {
      this.dataSource2 = new MatTableDataSource(data);

      const filterArr = data.filter( (item:any ) => item.availability === true)
      this.nameArr = filterArr.map((a:any) =>{
        return a.equipmentName
      })
      this.specArr = filterArr.map((a:any) =>{
        return a.classification
      })
      this.classArr = filterArr.map((a:any) =>{
        return a.specification
      })


      this.dataSourceIdPickerByName = new Set(this.nameArr);
      this.dataSourceIdPickerByClass = new Set(this.specArr);
      this.dataSourceIdPickerBySpec = new Set(this.classArr);
    })
  }

  private createForm() {
    this.addForm = this.formBuilder.group({
      equipmentName: new FormControl("", {validators: [Validators.required]}),
      classification: new FormControl("", {validators: [Validators.required]}),
      specification: new FormControl("", {validators: [Validators.required]}),
      broken: new FormControl(false),
      availability: new FormControl(true)
    })
  }

  addEq() {
    this.http.post(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment`, this.addForm.value).subscribe()
  }

  changeAvailability(data?: any) {
    const availability = !data.availability
    this.http.patch(`https://justfitequipmentcatalog.herokuapp.com/justfit/equipment/changeAvailabilityList?availability=${availability}`, [data]).subscribe(() => this.init())
  }

  changeBroken(data?: any) {
    const broken = !data.broken
    console.log(broken);

    this.http.patch(`https://justfitequipmentcatalog.herokuapp.com/justfit/equipment/changeBrokenStatus?broken=${broken}&id=${data.id}`, [data]).subscribe(() => this.init())
  }
}
