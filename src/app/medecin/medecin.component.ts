import { Component, OnInit, Input } from '@angular/core';
import { MedecinService } from './../medecin.service';
import {Medecin} from '../medecin';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  @Input() medecin: Medecin;

  constructor() { }

  async ngOnInit() {
  }
}
