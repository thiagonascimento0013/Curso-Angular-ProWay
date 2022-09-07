import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {

  nome = "Thiago";
  dataNascimento = "1993-10-22";
  urlImage = "/assets/sol.png";

  mostrarDataNascimento() {
    alert(`A data de nascimento de Thiago é: ${this.dataNascimento}`);
  }
}
