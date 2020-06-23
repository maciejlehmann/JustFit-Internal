import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pawel',
  templateUrl: './pawel.component.html',
  styleUrls: ['./pawel.component.scss']
})
export class PawelComponent implements OnInit {

  dataSource: any
  dataSource2: any

  activities: any

  addForm!: FormGroup

  displayedColumns: string[] = ['id', 'firstName', 'surName', 'email', 'username', 'password', 'phoneNumber', 'specialization', 'workingHours'];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.createForm()
  }

  ngOnInit() {
    this.http.get(`https://worker-api-175ic-a2.herokuapp.com/getWorkersList`).subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource)
    })

    this.http.get(`https://planowanie-zajec.herokuapp.com/getAllActivityTypes`).subscribe(data => {
      this.activities = data
    })
  }

  private createForm() {
    this.addForm = this.formBuilder.group({
      firstName: new FormControl("", {validators: [Validators.required]}),
      surName: new FormControl("", {validators: [Validators.required]}),
      email: new FormControl("", {validators: [Validators.required]}),
      username: new FormControl("", {validators: [Validators.required]}),
      password: new FormControl("", {validators: [Validators.required]}),
      phoneNumber: new FormControl("", {validators: [Validators.required]}),
      specialization: new FormControl("", {validators: [Validators.required]}),
      workingHours: new FormControl("", {validators: [Validators.required]})
    })
  }

  addWorker() {
    this.http.post(`https://worker-api-175ic-a2.herokuapp.com/addNewWorker`, this.addForm.value).subscribe()
  }

}
