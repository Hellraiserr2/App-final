import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private menuController: MenuController,
    private router: Router) {}

  ngOnInit() {
  }

  irALogin() {
    // Navegar a la página de login
    this.router.navigate(['/login']);
  }

  irARegistro() {
    // Navegar a la página de registro
    this.router.navigate(['/registro']);
  }

  mostrarMenu(){
    this.menuController.open('first');

  }


}
