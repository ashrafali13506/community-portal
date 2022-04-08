import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectThreadComponent } from './connect-thread.component';

describe('ConnectThreadComponent', () => {
  let component: ConnectThreadComponent;
  let fixture: ComponentFixture<ConnectThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
