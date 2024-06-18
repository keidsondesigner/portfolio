import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule, ],
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

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add two numbers', () => {
    expect(component.sum(1, 2)).toBe(3);
  });

  it('should contain navigation links', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('.container-header__nav-mobile-nav-link a');
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].getAttribute('href')).toBe('#sobre');
    expect(navLinks[1].getAttribute('href')).toBe('#projetos');
    expect(navLinks[2].getAttribute('href')).toBe('#habilidades');
  });

  it('should contain navbar toggler', () => {
    const toggler: HTMLButtonElement = fixture.nativeElement.querySelector('.navbar-toggler');
    expect(toggler).toBeTruthy();
    expect(toggler.getAttribute('aria-controls')).toBe('navbarSupportedContent');
    expect(toggler.getAttribute('aria-expanded')).toBe('false');
    expect(toggler.getAttribute('aria-label')).toBe('Toggle navigation');
  });

  it('should toggle navbar on click', () => {
    const toggler: HTMLButtonElement = fixture.nativeElement.querySelector('.navbar-toggler');
    const navbarContent: HTMLElement = fixture.nativeElement.querySelector('#navbarSupportedContent');

    expect(navbarContent.classList).toContain('collapse');

    toggler.click();
    navbarContent.classList.add('show');
    fixture.detectChanges();

    expect(navbarContent.classList).toContain('show');

    toggler.click();
    navbarContent.classList.remove('show');
    fixture.detectChanges();

    expect(navbarContent.classList).not.toContain('show');
  });
});
