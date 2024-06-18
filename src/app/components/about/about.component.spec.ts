import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title correctly', () => {
    const titleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('.container-about__content-item__title');
    expect(titleElement.textContent?.trim()).toBe('Sobre mim');
  });

  it('should render first paragraph correctly', () => {
    const paragraph1Element: HTMLParagraphElement = fixture.nativeElement.querySelector('.container-about__content-item__paragraph-1');
    expect(paragraph1Element.textContent?.trim()).toBe(
      '👋 Sou um desenvolvedor frontend altamente qualificado e apaixonado por criar experiências digitais inspiradoras. ' +
      'Com mais de 3 anos de experiência em desenvolvimento Angular, meu foco principal é aprimorar a interface do usuário e a experiência do usuário.'
    );
  });

  it('should render second paragraph correctly', () => {
    const paragraph2Element: HTMLParagraphElement = fixture.nativeElement.querySelector('.container-about__content-item__paragraph-2');
    expect(paragraph2Element.textContent?.trim()).toBe(
      'Com uma sólida base em desenvolvimento Angular e uma habilidade inerente para criar interfaces de usuário eficazes, ' +
      'estou comprometido em continuar contribuindo para projetos de sucesso e impulsionando a inovação em todas as oportunidades que surgirem. ' +
      'Se você está procurando um desenvolvedor frontend experiente que combine habilidades técnicas sólidas com uma paixão por design e experiência do usuário, ' +
      'estou pronto para enfrentar novos desafios e fazer a diferença em sua equipe.'
    );
  });

  it('should render third paragraph correctly', () => {
    const paragraph3Element: HTMLParagraphElement = fixture.nativeElement.querySelector('.container-about__content-item__paragraph-3');
    expect(paragraph3Element.textContent?.trim()).toBe(
      'Conecte-se comigo e vamos explorar como posso agregar valor ao seu próximo projeto.'
    );
  });
});
