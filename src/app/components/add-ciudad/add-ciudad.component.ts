import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/ciudad.model';
import { CiudadService } from 'src/app/services/ciudad.service';
@Component({
  selector: 'app-add-ciudad',
  templateUrl: './add-ciudad.component.html',
  styleUrls: ['./add-ciudad.component.scss']
})
export class AddCiudadComponent implements OnInit {

  tutorial: Tutorial = {
      nombres: '',
      apellidos: '',
      documento: 0,
      fechaNacimiento: "",
      email: '',
      telefono: 1,
      usuario: '',
      password: '',
      ciudadId: '',
      tipoDocumentoId: ''
  };
  submitted = false;

  constructor(private tutorialService: CiudadService) { }
  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      nombres: this.tutorial.nombres,
      apellidos: this.tutorial.apellidos,
      documento: this.tutorial.documento,
      fechaNacimiento: this.tutorial.fechaNacimiento,
      email: this.tutorial.email,
      telefono: this.tutorial.telefono,
      usuario: this.tutorial.usuario,
      password: this.tutorial.password,
      ciudadId: this.tutorial.ciudadId,
      tipoDocumentoId: this.tutorial.tipoDocumentoId
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      nombres: '',
      apellidos: '',
      documento: 0,
      fechaNacimiento: "",
      email: '',
      telefono: 1,
      usuario: '',
      password: '',
      ciudadId: '',
      tipoDocumentoId: ''
    };
  }

}
