import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  datashow:boolean = false
  constructor(private _forumService:ForumService) { }

  ngOnInit(): void {
    this._forumService.getForum().subscribe(data=>{
      console.log(data);
      
    })
  }

}
