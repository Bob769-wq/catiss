import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-banner',
  imports: [],
  template: `
    <div>
      <img src="/mid-banneer.webp" alt="mid-banner" />
    </div>
    <div class="big:max-w-[var(--container)] mx-auto px-[.9375rem]">
      <img src="/mid-banner2.webp" alt="mid-banner2" />
    </div>
  `,
  styles: ``,
})
export class MiddleBanner {}
