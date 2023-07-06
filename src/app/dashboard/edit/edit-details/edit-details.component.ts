import { Component, Input, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/Admin/account-service.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() currAccount !: User;
  constructor(private accountService: AccountServiceService){}
  ngOnInit(): void {
    
  }
  
}
