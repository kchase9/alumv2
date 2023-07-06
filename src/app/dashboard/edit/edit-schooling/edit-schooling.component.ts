import { Component, Input, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/Admin/account-service.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-schooling',
  templateUrl: './edit-schooling.component.html',
  styleUrls: ['./edit-schooling.component.css']
})
export class EditSchoolingComponent implements OnInit{
  @Input() currAccount !: User;

  constructor(private accountService: AccountServiceService){}
  ngOnInit(): void {
    
  }

  deleteDegree(degreeID: number){
    this.accountService.deleteDegreeById(this.currAccount.id, degreeID);
  }

}
