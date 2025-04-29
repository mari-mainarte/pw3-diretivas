import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  professores : string[] = ["Rogério", "Marion", "Luiz", "Edson", "Miriano"];
  tarefas : any[] = [
    {"id": 1, "nome": "Atividade de PAM", "concluido": true},
    {"id": 2, "nome": "Estudar inglês", "concluido": false},
    {"id": 3, "nome": "Exercícios de matemática", "concluido": true},
    {"id": 4, "nome": "Fazer Redação", "concluido": false},
    {"id": 5, "nome": "Versão mobile no figma", "concluido": false}
  ]

  //exibeTarefas : boolean = false
  //concluidas : boolean = true;
  exibeTudo : boolean = true;
  textoBotao : boolean = true;

  remover(index : number){
    this.professores.splice(index, 1);
  }

  /**mostrarTarefas(){
    this.exibeTarefas = true;
    this.concluidas = !this.concluidas;
  }**/

  exibirTodas(){
    this.exibeTudo = !this.exibeTudo;
  }

  getConcluidas(){
    return this.tarefas.filter((item) => {
        return item.concluido;
    })
  }

}
