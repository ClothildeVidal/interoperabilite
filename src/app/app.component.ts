import { AppointmentService } from './appointment.service';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientService } from './patient.service';
import { MedecinService } from './medecin.service';
import { Component, OnInit } from '@angular/core';

import { Medecin } from './Medecin';
import { Patient } from './Patient';
import { Appointment } from './Appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patient: Patient;
  medecin: Medecin;
  appointment: Appointment[] = [];

  title = 'Médi\'RDV';

  constructor(
    private patientService: PatientService,
    private medecinService: MedecinService,
    private appointmentService: AppointmentService) { }

  async ngOnInit() {
    this.patient = await this.patientService.getPatient('5d7f8a7432364000151f8abf');
    this.medecin = await this.medecinService.getMedecin('5d7f87d632364000151f8abe');
  //   this.appointment.push(await this.appointmentService.getAppointmentPatient('5d7f8a7432364000151f8abf'));
  // console.log(this.appointment);
  }
}
