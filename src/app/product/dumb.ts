import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProductItem {
  id: number;
  img1: string;
  img: string;
  title: string;
  link: string;
  price: string;
  oldPrice?: string;
}

@Component({
  selector: 'app-dumb',
  imports: [RouterLink],
  template: `
    <div class="mb-[.9375rem] px-[.9375rem] relative group">
      <a [routerLink]="product().link">
        <div class="relative">
          <img
            [src]="product().img1"
            [alt]="product().title"
            class="w-full object-contain h-full transition-opacity duration-300 group-hover:opacity-0"
          />
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <img
              [src]="product().img"
              [alt]="product().title"
              class="w-full object-contain h-full "
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 mid:block hidden"></div>
          </div>
          <div class="absolute inset-x-4 group-hover:flex bottom-5 justify-center hidden ">
            <button
              class="bg-white hover:bg-[#C74060] hover:text-white text-center mid:block hidden w-full py-2"
            >
              加入購物車
            </button>
          </div>
        </div>

        <div class="pb-6 pt-[.625rem]">
          <div class="line-clamp-2 text-sm text-center mb-1">
            {{ product().title }}
          </div>
          <div class="pb-16 mid:pb-0">
            <div class="text-base font-bold text-center text-[#C74060]">{{ product().price }}</div>
            <div class="text-center line-through">{{ product().oldPrice }}</div>
          </div>
        </div>
      </a>

      <button class="inset-x-4 flex justify-center absolute bottom-0 py-2 bg-[#F7F7F7] mid:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
          <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            fill="#c74060"
            d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
          />
        </svg>
      </button>
    </div>
  `,
  styles: ``,
})
export class Dumb {
  product = input.required<ProductItem>();
}
