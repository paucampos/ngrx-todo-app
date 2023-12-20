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
  @Input() todo: Todo = new Todo('text');
  @ViewChild('inputEdit') txtEdit!: ElementRef;

  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl('', Validators.required);
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado.setValue(this.todo.completed);
    this.txtInput.setValue(this.todo.text);

    this.chkCompletado.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editing = true;
    setTimeout(() => {
      this.txtEdit.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        text: this.txtInput.value,
      })
    );
  }

  eliminar() {
    this.store.dispatch(actions.eliminar({ id: this.todo.id }));
  }
}
