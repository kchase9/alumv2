import { Component, Input, OnInit } from '@angular/core';
import { Alumni } from 'src/app/shared/alumni.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.css']
})
export class ProfilePreviewComponent implements OnInit{
  @Input() currAccount !: Alumni;
  
  ngOnInit(): void {
    
  }

}
