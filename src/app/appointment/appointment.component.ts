import { Medecin } from './../Medecin';
import { Patient } from './../Patient';
import { AppointmentService } from './../appointment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../appointment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() patient: Patient;
  @Input() medecin: Medecin;

  appointment: Appointment;

  appointmentTake: Appointment;
  appointmentForm: FormGroup;

  constructor(private appointmentService: AppointmentService) { }

  async ngOnInit() {
    this.appointmentForm = new FormGroup({
      date: new FormControl('', Validators.required),
      hours: new FormControl('', Validators.required),
      minutes: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    console.log(this.appointment);
    this.appointment = await this.appointmentService.getAppointmentPatient('5d7f8a7432364000151f8abf');
    console.log(this.appointment);
  }

  onSubmit() {
    this.add(
      this.appointmentForm.value.date,
      this.appointmentForm.value.hours,
      this.appointmentForm.value.minutes,
      this.patient,
      this.medecin,
      this.appointmentForm.value.description);
    alert('Vous avez pris un rdv !');
    window.location.reload();
  }

  async add(date: Date, hours: string, minutes: string, patient: Patient, practitioner: Medecin, description: string): Promise<void> {
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    const end = new Date(date);
    end.setMinutes(end.getMinutes() + 30);

    const appointmentTake = await this.appointmentService.addAppointment({
      resourceType: 'Appointment',
      description,
      start: date,
      end,
      participant: [{
        required: 'required',
        status: 'accepted',
        actor: {
          reference: `Patient/${patient.id}`,
          display: `${patient.name[0].given[0]} ${patient.name[0].family}`
        }
      }, {
        required: 'required',
        status: 'needs-action',
        actor: {
          reference: `Practitioner/${practitioner.id}`,
          display: `${practitioner.name[0].given[0]} ${practitioner.name[0].family}`
        }
      }],
    });
  }



}
