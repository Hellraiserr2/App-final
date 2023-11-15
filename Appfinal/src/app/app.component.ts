import { Component, OnInit } from '@angular/core';
import { MapCustomService } from './map-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class TuComponenteComponent implements OnInit {

  constructor(private mapService: MapCustomService) { }

  ngOnInit(): void {
    // Puedes acceder al mapa a través del servicio
    const map = this.mapService.map;

    // Realizar operaciones adicionales en el mapa si es necesario
  }

}
