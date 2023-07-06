import { Component, Input, OnInit } from '@angular/core';
import { Alumni } from 'src/app/shared/alumni.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{
  @Input() currAccount !: Alumni;


  ngOnInit(): void {
    
  }

}
