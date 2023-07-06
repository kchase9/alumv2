import { Component, Input, OnInit } from '@angular/core';
import { Alumni } from 'src/app/shared/alumni.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() currAccount !: Alumni;

  ngOnInit(): void {
    
  }

}
