import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-connect-header',
  templateUrl: './connect-header.component.html',
  styleUrls: ['./connect-header.component.css']
})
export class ConnectHeaderComponent implements OnInit {


  public selectControl = new FormControl();
  public variables = [
    {
      "id":"Covid Forum"
    },
    {
      "id":"Diabetes Forum"
    }
    ,{
      "id":" My Forums"
    }
 
    
  ];

  public variables2 = [
    {
      "id":"fever"
    },
    {
      "id":"cold"
    }
    ,{
      "id":" flu"
    },{
      "id":"Diabetes"
    }
    ,{
      "id":" Depression."
    },{
      "id":"Anxiety"
    },{
      "id":"Hemorrhoid"
    },{
      "id":"Yeast infection"
    },{
      "id":"Lupus"
    }
 
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("HI")
  }


}
