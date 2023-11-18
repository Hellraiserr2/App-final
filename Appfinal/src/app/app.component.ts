import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'home'
    },
    {
      name:'registro',
      icon: 'bug-outline',
      redirecTo:'registro'
    },
    {
      name:'login',
      icon: 'bug-outline',
      redirecTo:'login'
    }


  ]

}
