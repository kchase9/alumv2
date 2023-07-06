import { Component, Input, OnInit } from '@angular/core';
import { Alumni } from 'src/app/shared/alumni.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit{
  @Input() currAccount !: Alumni;

  ngOnInit(): void {
    
  }

}
