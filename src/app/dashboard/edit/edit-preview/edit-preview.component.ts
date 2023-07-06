import { Component, Input, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/Admin/account-service.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-preview',
  templateUrl: './edit-preview.component.html',
  styleUrls: ['./edit-preview.component.css']
})
export class EditPreviewComponent implements OnInit{
  @Input() currAccount !: User;

  constructor(private accountService: AccountServiceService){}

  ngOnInit(): void {
    
  }

}
