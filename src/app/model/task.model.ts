export class TaskModel{
    constructor(
      public title: string,
      public title_color: string,
      public description: string,
      public username : string,
      public bgimage : string,
      public message_count : number,
      public attachment_count : number,
      public notification_date : string,
      public notification_color : string,
      public task_date : string,
      public usericon : number){}
  }