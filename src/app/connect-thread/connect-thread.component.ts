import { Component, Input, OnInit } from '@angular/core'; 
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-connect-thread',
  templateUrl: './connect-thread.component.html',
  styleUrls: ['./connect-thread.component.css']
})
export class ConnectThreadComponent implements OnInit {

  @Input()
  set receive(search:string){ 
    this.filter(search);
  }
  
  constructor(private forumservice: ForumService) { }

  ngOnInit(): void {
    this.forumservice.getForum().subscribe((res) =>{
      console.log(res);
    });


    // this.connectService.searchTextMsg.asObservable().subscribe((text) =>{
    //   console.log(text);
    // })
  }

  filter(data:any){
    console.log('filter',data);
  }
}
