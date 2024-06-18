import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { AboutComponent } from '../../components/about/about.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { CardSkillsComponent } from '../../components/card-skills/card-skills.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        HeaderComponent,
        HeroComponent,
        SocialLinksComponent,
        AboutComponent,
        CardProjectComponent,
        CardSkillsComponent,
        FooterComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {},
            queryParams: {}
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header component', () => {
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('should render hero component', () => {
    const heroElement = fixture.nativeElement.querySelector('app-hero');
    expect(heroElement).toBeTruthy();
  });

  it('should render social links component', () => {
    const socialLinksElement = fixture.nativeElement.querySelector('app-social-links');
    expect(socialLinksElement).toBeTruthy();
  });

  it('should render about component', () => {
    const aboutElement = fixture.nativeElement.querySelector('app-about');
    expect(aboutElement).toBeTruthy();
  });

  it('should render card project component', () => {
    const cardProjectElement = fixture.nativeElement.querySelector('app-card-project');
    expect(cardProjectElement).toBeTruthy();
  });

  it('should render card skills component', () => {
    const cardSkillsElement = fixture.nativeElement.querySelector('app-card-skills');
    expect(cardSkillsElement).toBeTruthy();
  });

  it('should render footer component', () => {
    const footerElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerElement).toBeTruthy();
  });
});
