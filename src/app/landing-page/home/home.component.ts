import { HeroComponent } from './../../components/hero/hero.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { CardSkillsComponent } from '../../components/card-skills/card-skills.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SocialLinksComponent,
    AboutComponent,
    CardProjectComponent,
    CardSkillsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
