import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/shared/degree.model';
import { Enrollment } from 'src/app/shared/enrollment.model';

@Component({
  selector: 'app-degree-details',
  templateUrl: './degree-details.component.html',
  styleUrls: ['./degree-details.component.css']
})
export class DegreeDetailsComponent implements OnInit{
  @Input() currDegree !: Enrollment;

  ngOnInit(): void {
    
  }

}
