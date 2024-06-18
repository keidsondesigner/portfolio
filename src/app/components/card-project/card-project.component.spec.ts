import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectComponent } from './card-project.component';

describe('CardProjectComponent', () => {
  let component: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render project title and link correctly', () => {
    const titles: HTMLHeadingElement[] = fixture.nativeElement.querySelectorAll('.container-card-project__content-cards__card h3');
    expect(titles.length).toBe(6);

    expect(titles[0].textContent?.trim()).toBe('JWT Vue 3 e Firebase');
    const links = fixture.nativeElement.querySelectorAll('.container-card-project__content-cards__card a');
    expect(links[0].getAttribute('href')).toBe('https://quasar-supabase-estoque.vercel.app/login');
  });

  it('should render project descriptions correctly', () => {
    const descriptions: HTMLParagraphElement[] = fixture.nativeElement.querySelectorAll('.container-card-project__content-cards__card p');
    expect(descriptions.length).toBe(6);

    expect(descriptions[1].textContent?.trim()).toBe('Aplicativo sendo desenvolvido em Ionic e Capacitor. Acesse pelo celular');
  });

  it('should render correct icons for projects', () => {
    const icons: HTMLElement[] = fixture.nativeElement.querySelectorAll('.container-card-project__content-cards__card i');
    expect(icons.length).toBe(6);

    expect(icons[2].classList).toContain('bi-bookmark-check');
  });
});
