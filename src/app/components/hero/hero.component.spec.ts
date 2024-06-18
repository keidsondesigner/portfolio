import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title correctly', () => {
    const titleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('.container-hero__content-item__title');
    expect(titleElement.textContent).toContain('Olá, eu sou o Keidson Roby :)');
  });

  it('should render welcome message correctly', () => {
    const welcomeMessageElement: HTMLParagraphElement = fixture.nativeElement.querySelector('.container-hero__content-item__paragraph-1');
    expect(welcomeMessageElement.textContent).toContain('seja bem vindo!');
  });

  it('should render description paragraphs correctly', () => {
    const paragraphs: HTMLParagraphElement[] = fixture.nativeElement.querySelectorAll('.container-hero__content-item__paragraph-2, .container-hero__content-item__paragraph-3');

    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toContain('Desenvolvedor Frontend Angular & UI Designer desde 2018');
    expect(paragraphs[1].textContent).toContain('Construindo experiências visuais e interativas para entregar o melhor projeto.');
  });

  it('should render LinkedIn button with correct href', () => {
    const linkedinButton: HTMLAnchorElement = fixture.nativeElement.querySelector('.ontainer-hero__content-item__btn-1');
    expect(linkedinButton.href).toBe('https://www.linkedin.com/in/keidsonroby/');
  });

  it('should render Contact button with correct href', () => {
    const contactButton: HTMLAnchorElement = fixture.nativeElement.querySelector('.ontainer-hero__content-item__btn-2');
    expect(contactButton.href).toBe('https://api.whatsapp.com/send?phone=5592994571858');
  });
});
