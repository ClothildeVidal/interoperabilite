import { Medecin } from './../Medecin';
import { Patient } from './../Patient';
import { AppointmentService } from './../appointment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../appointment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() patient: Patient;
  @Input() medecin: Medecin;

  appointment: Appointment;
  appointmentForm: FormGroup;

  constructor(private appointmentService: AppointmentService) { }

  async ngOnInit() {
    this.appointmentForm = new FormGroup({
      date: new FormControl('', Validators.required),
      hours: new FormControl('', Validators.required),
      minutes: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.add(
      this.appointmentForm.value.date,
      this.appointmentForm.value.hours,
      this.appointmentForm.value.minutes,
      this.patient,
      this.medecin);
  }

  async add(date: Date, hours: string, minutes: string, patient: Patient, practitioner: Medecin): Promise<void> {
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    const end = new Date(date);
    end.setMinutes(end.getMinutes() + 30);

    await this.appointmentService.addAppointment({
      resourceType: 'Appointment',
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
