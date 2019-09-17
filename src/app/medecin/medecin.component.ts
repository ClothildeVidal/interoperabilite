import { Component, OnInit } from '@angular/core';
import { MedecinService } from './../medecin.service';
import {Medecin} from '../medecin';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  medecin: Medecin;


  constructor(private medecinService: MedecinService) { }

  async ngOnInit() {
    this.medecin = await this.medecinService.getMedecin('5d7f87d632364000151f8abe');
  }
}
