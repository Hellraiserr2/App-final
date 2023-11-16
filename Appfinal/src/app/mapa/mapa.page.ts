import { Component, OnInit } from '@angular/core';
import { MapCustomService } from '../map-custom.service';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(private mapService: MapCustomService) { }

  ngOnInit(): void {
    // Puedes acceder al mapa a través del servicio
    const map = this.mapService.map;

    // Realizar operaciones adicionales en el mapa si es necesario
  }
}
