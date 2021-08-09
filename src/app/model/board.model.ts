import { Column } from './column.model';
import { TaskModel } from './task.model';

export class Board {
    constructor(public name: string, public columns: Column[]) {}
}

export const DEFAULT_BOARD =  new Board('Test Board', [
    new Column('ToDo', [
      new TaskModel("Prepare moodboard for website branding", "yellow-border", "dummy discription", "John", "", 0, 3, "", "gray-bg", "", 2),
      new TaskModel("Create an anouncement about product launch", "red-border", "dummy discription", "John", "", 0, 1, "", "gray-bg", "", 1),
      new TaskModel("Prepare a moodboard for LP", "yellow-border", "dummy discription", "John", "", 0, 0, "Oct,23", "gray-bg", "", 3),
      new TaskModel("Final edition", "red-border", "dummy discription", "John", "", 1, 0, "Oct,23", "", "", 3)
    ]),
    new Column('In progress', [
      new TaskModel("Interview with user", "yellow-border", "dummy discription", "John", "", 9, 3, "Oct,23", "gray-bg", "", 1),
      new TaskModel("Search refrence for multicolored background", "gray-border", "dummy discription", "John", "/assets/images/bg/bg1.jpg", 0, 3, "Oct,23", "gray-bg", "", 1),
      new TaskModel("Create UI kit for project", "yellow-border", "dummy discription", "John", "", 4, 0, "Oct,23", "red-bg", "", 3),
      new TaskModel("Prepare detaild brief for devs & designers", "yellow-border", "dummy discription", "John", "", 4, 3, "Oct,23", "gray-bg", "", 1),
    ]),
    new Column('In review', [
      new TaskModel("Describe the problem with supermassive black hole", "red-border", "dummy discription", "John", "", 4, 3, "Oct,23", "gray-bg", "", 1),
      new TaskModel("Facebook post about new case study on behance", "gray-border", "dummy discription", "John", "", 4, 0, "Oct,10", "gray-border", "", 0),
      new TaskModel("Chat boat screen for app", "yellow-border", "dummy discription", "John", "/assets/images/bg/bg2.png", 0, 0, "Oct,23", "gray-bg", "", 1),
      new TaskModel("Read Hawking's 'A brief History of Time'", "yellow-border", "dummy discription", "John", "", 16, 9, "", "", "", 2),
    ]),
    new Column('Done', [
      new TaskModel("Prepare detaild brief for devs & designers", "red-border", "dummy discription", "John", "", 4, 3, "", "", "Sep,23", 1),
      new TaskModel("Skype call with client", "red-border", "dummy discription", "John", "", 4, 0, "", "", "Oct,12", 1),
      new TaskModel("Develop a design language for project", "yellow-border", "dummy discription", "John", "", 16, 9, "", "", "Oct,13", 2),
      new TaskModel("Read Hawking's 'A brief History of Time'", "yellow-border", "dummy discription", "John", "", 16, 9, "", "", "Oct,13", 2),
      new TaskModel("Illustration for hero section", "red-border", "dummy discription", "John", "/assets/images/bg/bg3.jpg", 0, 0, "", "", "Aug,1", 1),
    ])
  ]); 