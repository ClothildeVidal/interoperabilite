import { AppointmentService } from './../appointment.service';
import { Component, OnInit } from '@angular/core';
import {Appointment} from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment;
  constructor(private appointmentService: AppointmentService) { }

  async ngOnInit() {
    this.appointment = await this.appointmentService.getAppointment('5d809ab032364000151f8ac7');
  }
}
