import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  @ViewChild('inputEdit') txtEdit!: ElementRef;
  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl('', Validators.required);
  editando: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkCompletado.setValue(this.todo.completado);
    this.txtInput.setValue(this.todo.texto);
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtEdit.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editando = false;
    // TODO: Guardar nuevo todo
  }
}
