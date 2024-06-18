import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain copyright text', () => {
    const copyrightText: HTMLParagraphElement = fixture.nativeElement.querySelector('.container-footer__content-title__title');
    expect(copyrightText.textContent).toContain('Copyright © 2024 Keidson Roby');
  });

  it('should contain three social links', () => {
    const socialLinks: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('.container-footer__content-links-social-item a');
    expect(socialLinks.length).toBe(3);
    expect(socialLinks[0].getAttribute('href')).toBe('https://x.com/KeidsonRoby');
    expect(socialLinks[1].getAttribute('href')).toBe('https://github.com/keidsondesigner');
    expect(socialLinks[2].getAttribute('href')).toBe('https://www.linkedin.com/in/keidsonroby/');
  });
});
