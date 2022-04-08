import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectBannerComponent } from './connect-banner.component';

describe('ConnectBannerComponent', () => {
  let component: ConnectBannerComponent;
  let fixture: ComponentFixture<ConnectBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
