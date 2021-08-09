import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Board, DEFAULT_BOARD } from '../model/board.model';
import { Column } from '../model/column.model';
import { TaskModel } from '../model/task.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnChanges {
  @Input() newTodo = {};
  usericons = [
    "/assets/images/user/user1.png",
    "/assets/images/user/user2.png",
    "/assets/images/user/user3.png"
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes?.newTodo?.currentValue).length > 0) {
      this.addTodo(changes.newTodo.currentValue);
    }
  }
  board: Board = DEFAULT_BOARD;

  ngOnInit() {
    if (localStorage.getItem("alltask")) {
      let alltask: any = localStorage.getItem("alltask");
      this.board = JSON.parse(alltask);
    }
  }

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    localStorage.setItem("alltask", JSON.stringify(this.board))
  }

  addTodo(newTodo: TaskModel) {
    this.board.columns[0].tasks.push(newTodo);
    localStorage.setItem("alltask", JSON.stringify(this.board));
  }

  deleteTask(item: TaskModel[], i: number) {
    item.splice(i, 1);
    localStorage.setItem("alltask", JSON.stringify(this.board));
  }

}