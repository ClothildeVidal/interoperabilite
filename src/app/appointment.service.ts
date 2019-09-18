import { HttpClient } from '@angular/common/http';
import { Appointment } from './Appointment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentList: Array<Appointment> = [];
  constructor(private http: HttpClient) { }

  private appointmentUrl = 'https://fhir.eole-consulting.io/api/appointment';

  /** POST: add a new appointment to the server */
  addAppointment(appointment: Appointment): Promise<Appointment> {
    return this.http.post<Appointment>(this.appointmentUrl, appointment).toPromise();
  }

  getAppointment(id: string): Promise<Appointment> {
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.get<Appointment>(url).toPromise();
  }

    getAppointmentPatient(ref: string): Promise<Appointment> {
    const url = `${this.appointmentUrl}?participant.actor.reference=Patient/${ref}`;
    return this.http.get<Appointment>(url).toPromise();
  }

}
