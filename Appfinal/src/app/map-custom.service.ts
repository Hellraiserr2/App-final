import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;

  constructor() {
    this.mapbox.accessToken = 'TU_TOKEN_DE_ACCESO_DE_MAPBOX';

    this.map = new this.mapbox.Map({
      container: 'map', // Reemplaza 'map-container' con el ID de tu contenedor de mapa
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9 
    });

    // Agregar el geocodificador de Mapbox si es necesario
    const geocoder = new MapboxGeocoder({
      accessToken: this.mapbox.accessToken,
      mapboxgl: this.mapbox
    });

    // Agregar el geocodificador al mapa
    this.map.addControl(geocoder);
  }
}
