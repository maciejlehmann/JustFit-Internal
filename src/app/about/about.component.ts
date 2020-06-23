import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  dataSource: any
  dataSource2: any
  activities: any
  equipment: any

  addForm!: FormGroup

  displayedColumns: string[] = ['id', 'name', 'leader', 'activityType', 'date', 'hourStart', 'hourEnd', 'equipmentUsed', 'classCanceled'];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm()
  }

  ngOnInit() {
    this.http.get(`http://planowanie-zajec.herokuapp.com/getAllActivities`).subscribe(data => {
      this.dataSource = data
    })

    this.http.get(`https://planowanie-zajec.herokuapp.com/getAllActivityTypes`).subscribe(data => {
      this.activities = data
    })

    this.http.get(`http://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAllAvailable`).subscribe(data => {
      this.equipment = data
    })
  }

  private createForm() {
    this.addForm = this.formBuilder.group({
      name: new FormControl("nowy", {validators: [Validators.required]}),
      leader: new FormControl("Arek", {validators: [Validators.required]}),
      activityType: new FormControl("Aerobik", {validators: [Validators.required]}),
      date: new FormControl("09.09.2020", {validators: [Validators.required]}),
      hourStart: new FormControl("12:00", {validators: [Validators.required]}),
      hourEnd: new FormControl("13:00", {validators: [Validators.required]}),
      equipmentUsed: new FormControl("", {validators: [Validators.required]}),
      classCanceled: new FormControl(false)
    })
  }

  addActivity() {

    const obj = {
      name: this.addForm.value.name,
      leader: this.addForm.value.leader,
      activityType: this.addForm.value.activityType,
      date: this.addForm.value.date,
      hourStart: this.addForm.value.hourStart,
      hourEnd: this.addForm.value.hourEnd,
      equipmentUsed: [this.addForm.value.equipmentUsed],
      classCanceled: this.addForm.value.classCanceled
    }

    console.log(obj);


  this.http.post(`https://planowanie-zajec.herokuapp.com/addActivity`, obj).subscribe()
  }
}
