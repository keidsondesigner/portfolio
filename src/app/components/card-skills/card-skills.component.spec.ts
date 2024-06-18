import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkillsComponent } from './card-skills.component';

describe('CardSkillsComponent', () => {
  let component: CardSkillsComponent;
  let fixture: ComponentFixture<CardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render skill titles correctly', () => {
    const titles: HTMLHeadingElement[] = fixture.nativeElement.querySelectorAll('.container-card-skills__title');
    expect(titles.length).toBe(1);
    expect(titles[0].textContent?.trim()).toBe('Habilidades');
  });

  it('should render correct skill links and images', () => {
    const skillLinks: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.container-card-project__content-cards__card a');
    expect(skillLinks.length).toBe(6);

    expect(skillLinks[0].getAttribute('href')).toBe('https://developer.mozilla.org/pt-BR/docs/Web/HTML');
    expect(skillLinks[0].querySelector('img')?.getAttribute('alt')).toBe('logo html5');

    expect(skillLinks[1].getAttribute('href')).toBe('https://developer.mozilla.org/pt-BR/docs/Web/CSS');
    expect(skillLinks[1].querySelector('img')?.getAttribute('alt')).toBe('logo css');

    expect(skillLinks[2].getAttribute('href')).toBe('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript');
    expect(skillLinks[2].querySelector('img')?.getAttribute('alt')).toBe('logo javascript');

    expect(skillLinks[3].getAttribute('href')).toBe('https://angular.io/guide/what-is-angular');
    expect(skillLinks[3].querySelector('img')?.getAttribute('alt')).toBe('logo angular');

    expect(skillLinks[4].getAttribute('href')).toBe('https://getbootstrap.com/');
    expect(skillLinks[4].querySelector('img')?.getAttribute('alt')).toBe('logo bootsrap');

    expect(skillLinks[5].getAttribute('href')).toBe('https://tailwindcss.com/');
    expect(skillLinks[5].querySelector('img')?.getAttribute('alt')).toBe('logo tailwind css');
  });
});
