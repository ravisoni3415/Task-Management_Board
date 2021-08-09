import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';  
import { TaskModel } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management';
  closeResult: string = "";  
  title_name : string = "";
  description : string = "";
  username : string = "";
  newTodoItem = {};


  constructor(private modalService: NgbModal) {}  
 
  open(content : any) {  
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
    }, (reason) => {  
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    });  
  }  

  private getDismissReason(reason: any): string {  
    if (reason === ModalDismissReasons.ESC) {  
      return 'by pressing ESC';  
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      return 'by clicking on a backdrop';  
    } else {  
      return  `with: ${reason}`;  
    }  
  }
  
  addTodo(modal : any){
    let item = new TaskModel(this.title_name,"yellow-border",this.description,this.username,"",0,0,"Aug,2021","gray-bg","",1);
    this.newTodoItem =item;
    this.title_name = "";
    this.description = "";
    this.username = "";
    modal.close('Save click');
  }
}
