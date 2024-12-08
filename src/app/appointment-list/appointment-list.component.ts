import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  ngOnInit(): void {
    let appointments = localStorage.getItem('appointments');
    if (appointments) {
      this.appointments = JSON.parse(appointments);
    }
  }
  newApppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []

  addAppointment() {

    if (!this.newApppointmentTitle.trim.length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newApppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newApppointmentTitle = '';
      this.newAppointmentDate = new Date();
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
