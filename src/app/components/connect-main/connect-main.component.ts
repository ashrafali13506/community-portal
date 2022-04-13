import { Component, Input, OnInit, Output } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { Thread } from 'src/interfaces/type';

@Component({
  selector: 'app-connect-main',
  templateUrl: './connect-main.component.html',
  styleUrls: ['./connect-main.component.css'],
})
export class ConnectMainComponent implements OnInit {
  
  searchText!: string;
  @Input()
  set receive(search:string){ 
    this.searchText = search;
    console.log(search);
  }
  
  constructor(
    private forumservice: ForumService  ) {}

  ThreadList: Thread[] = [];
  ngOnInit(): void {
    this.forumservice.getAllThreads().subscribe((data) => {
      this.ThreadList = data;
      console.log('ThreadList', this.ThreadList);
    });

    // this.connectService.searchTextMsg.asObservable().subscribe((text) => {
    //   this.searchText = text;
    // });
  }
}
