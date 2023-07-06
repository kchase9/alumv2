import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/services/Admin/account-service.service';
import { Degree } from 'src/app/shared/degree.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-degree-list',
  templateUrl: './edit-degree-list.component.html',
  styleUrls: ['./edit-degree-list.component.css']
})
export class EditDegreeListComponent implements OnInit{
  currDegree !: Degree;
  @Output() delDegree = new EventEmitter<number>(); 

  constructor(private route: ActivatedRoute, 
    private accountService: AccountServiceService){}
  
  ngOnInit(): void {}

  deleteDegree(){
    this.delDegree.emit(this.currDegree.id);
  }
}
