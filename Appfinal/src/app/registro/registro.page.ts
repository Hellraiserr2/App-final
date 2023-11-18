import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../registroservice.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private toastController:ToastController,
    private fb : FormBuilder) {
      this.formularioRegistro = this.fb.group({
        'nombre':new FormControl("",Validators.required),
        'correo':new FormControl("",Validators.required),
        'password':new FormControl("",Validators.required),
        'confirmaPass':new FormControl("",Validators.required),
      });
     }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form= this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe completar con todos los datos',
        buttons:['Aceptar'],
      });

      await alert.present();
      return;
    }

    this.newUsuario.nomUsuario = form.nombre,
    this.newUsuario.correoUsuario = form.correo,
    this.newUsuario.passUsuario = form.password,
    this.newUsuario.repassUsuario = form.confirmaPass
    this.registroService.addDatos(this.newUsuario).then(dato => {
      this.newUsuario = <Usuario>{};
      this.showToast('datos agregados');
    });
  }

  async showToast(msg: string){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }

}
