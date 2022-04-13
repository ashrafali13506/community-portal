import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-connect-thread',
  templateUrl: './connect-thread.component.html',
  styleUrls: ['./connect-thread.component.css']
})
export class ConnectThreadComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getForum().subscribe((data)=>{
      console.log(data)
    })
  }

}
