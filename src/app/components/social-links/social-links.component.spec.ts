import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksComponent } from './social-links.component';

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent;
  let fixture: ComponentFixture<SocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of social links', () => {
    const socialLinks: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.container-social-links__content a');
    expect(socialLinks.length).toBe(4);
  });

  it('should render GitHub link correctly', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.container-social-links__content-item-1__link');
    expect(link.href).toBe('https://github.com/keidsondesigner');
    expect(link.title).toBe('icon github');
  });

  it('should render LinkedIn link correctly', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.container-social-links__content-item-2__link');
    expect(link.href).toBe('https://www.linkedin.com/in/keidsonroby/');
    expect(link.title).toBe('icon linkedin');
  });

  it('should render Twitter link correctly', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.container-social-links__content-item-3__link');
    expect(link.href).toBe('https://x.com/KeidsonRoby');
    expect(link.title).toBe('icon twitter');
  });

  it('should render YouTube link correctly', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.container-social-links__content-item-4__link');
    expect(link.href).toBe('https://www.youtube.com/channel/UC-lemWp6LFgffpUs1oytywg');
    expect(link.title).toBe('icon youtube');
  });
});
