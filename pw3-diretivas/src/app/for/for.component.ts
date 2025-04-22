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
    {"id": 1, "nome": "Atividade de PAM", "concluido": false},
    {"id": 2, "nome": "Estudar inglês", "concluido": false},
    {"id": 3, "nome": "Exercícios de matemática", "concluido": true},
    {"id": 4, "nome": "Fazer Redação", "concluido": false},
    {"id": 5, "nome": "Versão mobile no figma", "concluido": false}
  ]

  exibeTarefas : boolean = false
  textoBotao = "Mostrar Tudo"
  n = false

  remover(index : number){
    this.professores.splice(index, 1);
  }

  mostrarTarefas(){
    this.exibeTarefas = true
    this.textoBotao = "Mostrar Concluídas"
    return this.exibeTarefas
  }

  mostrarConcluidas(){
    
  }

}
