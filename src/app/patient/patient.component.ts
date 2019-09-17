import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;


  constructor(private patientService: PatientService) { }

  async ngOnInit() {
    this.patient = await this.patientService.getPatient('5d7f8a7432364000151f8abf');
  }
}
