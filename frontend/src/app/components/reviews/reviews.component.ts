import { Component, Inject, OnInit, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  @Input() teacher: []; 
  
  //@Input('master') masterName: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  getReviewByTeacher(){
    console.log(this.teacher);
    this.dialog.open(AppDialog, {
      width: '500px',
      height: '300px',
      data: {
        teachers: this.teacher
      }
    });
  }

}


@Component({
  selector: 'app-dialog',
  templateUrl: './reviews.dialog.html',
})

export class AppDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
