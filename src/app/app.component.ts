import { PatientService } from './patient.service';
import { MedecinService } from './medecin.service';
import { Component, OnInit } from '@angular/core';

import { Medecin } from './Medecin';
import { Patient } from './Patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patient: Patient;
  medecin: Medecin;

  title = 'TITRE';

  constructor(private patientService: PatientService, private medecinService: MedecinService) {}

  async ngOnInit() {
    this.patient = await this.patientService.getPatient('5d7f8a7432364000151f8abf');
    this.medecin = await this.medecinService.getMedecin('5d7f87d632364000151f8abe');
  }
}
