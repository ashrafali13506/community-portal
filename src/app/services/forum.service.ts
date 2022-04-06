import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Injectable({
  providedIn: 'root',
})
export class ForumService {
  data1: any;
  bsModalRef?: BsModalRef;
  constructor(private bsModalService: BsModalService) {}
  forumListData: any = [
    {
      id: 0,
      title: 'Welcome! Introduce yourself here!',
      content: `Hello and welcome to the patientsLikeMe room! you can introduce yourself in this thread to let other know that you're her.......`,
      author: 'LizMorgan',
      reviewer: 'THIAT',
      recent_activity: 2,
      no_of_replies: 1017,
      helpful: 1490,
      unread: 0,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'Raj',
          date: new Date(2022, 2, 1),
          likes: 2,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Winter Safety Tips!',
      content: `Winter weather can be dangerous for anyone, but for people with disabilities there are extra risks involved and precautions that can be taken`,
      author: 'KrystaS',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 4,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 10),
          likes: 2,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'New weight loss resolution!',
      content: `Have you made a New year's resolution? Or, maybe you've thought of making one but not sure where you'd find some support`,
      author: 'slowm_tam',
      reviewer: 'allisonkai',
      recent_activity: 1,
      no_of_replies: 2,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 11),
          likes: 1,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: `Diabetes drug could cure Alzheimer's Disease`,
      content: `Sometimes I think that changes in the circuitry of our brain makes us eat the way we eat which is why some people develop obesity.  Some of us also crave certain foods which again I think is the brain wired the way it is`,
      author: 'EricaF',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 5,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 12),
          likes: 3,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: `Very encouraging news about a diabetes`,
      content: `https://www.healthline.com/health/diabetes`,
      author: 'Jake',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 1,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'Brian',
          date: new Date(2022, 1, 13),
          likes: 1,
          comments: 'It was great idea, going to check it out',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
        {
          hid: 1,
          commentsBy: 'Jake',
          date: '09-02-2022',
          comments:
            'The article was awesome, lorep ipso lorem ips,lorep ipso lorem ips,lorep ipso lorem ipslorep ipso lorem ips',
          likes: 1,
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: `Extraordinary benefits of coconut oil for Alzheimer's Disease !!!!!!`,
      content: `My mother is in a home suffering from Alzheimers.  It is an evil, crucifying disease - not only for the person with it but all the family.  i am not a religious person, I don't go to church but believe in spirituality, believe in love, respect and trust but I can recall going to my local church and begging God to relieve my mum from the pain she was clearly suffering - the mental torture - the upset about being split from my dad after 60 years of marriage even though she couldn't convey it properly - we knew - we only had to look into her eyes. That was 5 years ago and she still goes on strong - retired into her own world but the emotional upset is still there.  I visit her in her home and there are so many people like her.  And coconut oil maybe the answer!
            I will print off your posting and give it to my sister who lives closest - she can pass it onto the home - it will be interesting to see their reaction.
    Breeze`,
      author: 'Jim',
      reviewer: 'allisonkai',
      recent_activity: 1,
      no_of_replies: 7,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 14),
          likes: 1,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: `Scientists develop new strategy to prevent Alzheimer's Parkinson's Disease`,
      content: `https://pubmed.ncbi.nlm.nih.gov/14597787/`,
      author: 'Moakes',
      reviewer: 'allisonkai',
      recent_activity: 1,
      no_of_replies: 9,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 15),
          likes: 2,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: `Introduce myself`,
      content: `HI, I have been a member since 2010, but I just recently began to spend more time on this site. Thank you for the welcome. I am going to my first conference and I am wondering what  it will be like. ( YOPN, in Atlanta)
      Myra Elaine`,
      author: 'Linda',
      reviewer: 'allisonkai',
      recent_activity: 1,
      no_of_replies: 13,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 16),
          likes: 3,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: `Coronavirus or COVID-19 outbreak`,
      content: `I am 74 and except for my Parkinson's, I have no other medical issues. I have not changed my actives, but not sure if I should continue to attend a daily Yoga class. Some times gets very crowed.
      Has anybody changed thier daily activities because of this coronavirus outbreak.`,
      author: 'EricaF',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 2,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 17),
          likes: 4,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 9,
      title: `Anthrax`,
      content: `Anthrax is a serious infectious disease caused by gram-positive, rod-shaped bacteria known as Bacillus anthracis. It occurs naturally in soil and commonly affects domestic and wild animals around the world.`,
      author: 'EricaF',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 2,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 17),
          likes: 4,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      title: `Ovarian Cancer`,
      content: `Hoping to get surgery for it. I can't have surgery at this point, due to another issue. I hope any treatment I have afterwards sill be kind to me.. I know nothing right now. Nothing about my cancer, other than it is Ovarian Cancer. My surgery will most likely be a total Hysterectomy, I was told. Which I want it all out anyway.
       If anyone has any input on Ovarian Cancer, please share with me.`,
      author: 'EricaF',
      reviewer: 'KrystaS',
      recent_activity: 1,
      no_of_replies: 2,
      helpful: 3,
      unread: 1,
      subscribe: false,
      history: [
        {
          hid: 0,
          commentsBy: 'John',
          date: new Date(2022, 1, 17),
          likes: 4,
          comments: 'This was awesome',
          replies: [
            {
              content: 'Thanks man, that was great',
              replyBy: 'smith',
            },
          ],
        },
      ],
    },
  ];

  pushToThread(id?: any) {
    console.log(this.forumListData.id);
  }

  fetchForumList(medicineName: any): any {
    console.log('star t ');
    const med = medicineName.split(' ');
    return from(this.forumListData).pipe(
      filter<any>((item) => {
        return (
          item['title'].toLowerCase().includes(med[0].toLowerCase()) ||
          item['title'].toLowerCase().includes('covid')
        );
      })
    );
  }

  fetchForumBy(authorName: any): any {
    return from(this.forumListData).pipe(
      filter<any>((item) => {
        return (
          item['author'].toLowerCase().includes(authorName.toLowerCase()) ||
          item['title'].toLowerCase().includes('covid')
        );
      })
    );
  }

  // showAlert(
  //   title: string,
  //   message: string,
  //   options: string[]
  // ): Observable<string> {
  //   const initialState = {
  //     title: title,
  //     message: message,
  //     options: options,
  //     answer: '',
  //     class: 'modal-sm',
  //   };
  //   this.bsModalRef = this.bsModalService.show(ConfirmDialogComponent, {
  //     initialState,
  //   });

  //   return new Observable<string>(this.getConfirmSubscriber());
  // }

  FormData(data: any): string[] {
    const forums = new Array();
    const maindata = new Array('Covid Forum', 'Diabetes Forum');
    forums.push(maindata);

    if (data !== null && data !== '') {
      forums.push(data);
      const localdata = localStorage.getItem('formlocaldata');
      if (localdata != null) {
        // const localarray = new Array(JSON.parse(localdata));
        // localarray.push(data);

        const localarray = new Array(JSON.parse(localdata)[0]);
        localarray.push(data);
        localStorage.removeItem('formlocaldata');
        localStorage.setItem('formlocaldata', JSON.stringify(localarray));
      }
      // else {
      //   localStorage.setItem('formlocaldata', JSON.stringify('Diabities'));
      // }
      return forums;
    } else {
      const storageData = new Array();
      // storageData[0] = 'Diabetes';
      storageData.push('My Forums');
      const localarray = new Array(storageData);
      const FirstLoaclStorage = localStorage.getItem('formlocaldata');
      if (FirstLoaclStorage == null) {
        localStorage.setItem('formlocaldata', JSON.stringify(localarray));
      }

      return forums;
    }
  }

  private getConfirmSubscriber() {
    return (observer?: any) => {
      const subscription = this.bsModalService.onHidden.subscribe(
        (reason: string) => {
          observer.next(this.bsModalRef?.content.answer);
          observer.complete();
        }
      );

      return {
        unsubscribe() {
          subscription.unsubscribe();
        },
      };
    };
  }
}

