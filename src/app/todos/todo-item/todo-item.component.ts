import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado.setValue(this.todo.completado);
    this.txtInput.setValue(this.todo.texto);

    this.chkCompletado.valueChanges.subscribe( valor => {
      if (this.todo.id) {
        this.store.dispatch(actions.toggle({ id: this.todo.id} ))
      }
    });
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
