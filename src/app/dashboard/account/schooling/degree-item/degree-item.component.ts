import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Degree } from 'src/app/shared/degree.model';
import { Enrollment } from 'src/app/shared/enrollment.model';

@Component({
  selector: 'app-degree-item',
  templateUrl: './degree-item.component.html',
  styleUrls: ['./degree-item.component.css']
})
export class DegreeItemComponent implements OnInit{
  @Input() currDegree !: Enrollment;
  @Output() degreeClicked = new EventEmitter<Enrollment>(); 
  
  ngOnInit(): void {
    
  }

  shareDegree(){
    this.degreeClicked.emit(this.currDegree);
  }

}
