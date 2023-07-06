import { Component, Input, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/Admin/account-service.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.css']
})
export class EditBioComponent implements OnInit{
  @Input() currAccount !: User;

  constructor(private accountService : AccountServiceService){}
  ngOnInit(): void {
    
  }

}
