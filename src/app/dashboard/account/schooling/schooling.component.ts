import { Component, Input, OnInit } from '@angular/core';
import { Alumni } from 'src/app/shared/alumni.model';
import { Enrollment } from 'src/app/shared/enrollment.model';

@Component({
  selector: 'app-schooling',
  templateUrl: './schooling.component.html',
  styleUrls: ['./schooling.component.css']
})
export class SchoolingComponent implements OnInit{
  @Input() currAccount !: Alumni;
  seeDegree !: Enrollment;
  showDegree :boolean = false;

  ngOnInit(): void {
    
  }

  displayData(degree: Enrollment){
    this.seeDegree = degree;
  }

}
