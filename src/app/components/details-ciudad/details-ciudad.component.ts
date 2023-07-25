import { Component, OnInit, Input } from '@angular/core';
import { Tutorial } from 'src/app/models/ciudad.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-details-ciudad',
  templateUrl: './details-ciudad.component.html',
  styleUrls: ['./details-ciudad.component.scss']
})
export class DetailsCiudadComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    personaId: '',
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
  message = '';

  constructor(
    private tutorialService: CiudadService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    

    this.tutorialService.update(this.currentTutorial.personaId, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.personaId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }
}
