import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Crumb } from './crumb/crumb';
import { HeroSection } from './hero-section/hero-section';
import { Product } from './product/product';
import { MiddleBanner } from './middle-banner/middle-banner';
import { AboutUs } from './about/about';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Crumb, HeroSection, Product, MiddleBanner, AboutUs, Footer],
  template: `
    <app-header />
    <div
      class="px-[.9375rem] md:px-0 big:max-w-[var(--container)] mid:max-w-[970px] md:max-w-[750px] mx-auto"
    >
      <app-crumb />
      <app-hero-section />
      <app-product />
    </div>
    <app-middle-banner />
    <div
      class="big:max-w-[var(--container)] mid:max-w-[970px] md:max-w-[750px] md:px-0 px-[.9375rem] mx-auto"
    >
      <app-about />
    </div>
    <app-footer />

    <div class="fixed right-5 bottom-5 z-50">
      <button
        class="w-16 h-16 bg-[#3C5997] rounded-full rounded-ee-none flex justify-center items-center"
      >
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="3" cy="12" r="3" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="21" cy="12" r="3" />
        </svg>
      </button>
    </div>
  `,
  styles: ``,
})
export class App {}
