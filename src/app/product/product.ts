import { Component } from '@angular/core';
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
  selector: 'app-product',
  imports: [RouterLink],
  template: `
    <div class="mb-5">
      <div class="flex flex-col items-center mb-7">
        <h2 class="text-[1.375rem] tracking-widest pt-[.625rem] pb-[1.5625rem]">精選商品</h2>
        <div class="w-6 bg-[#c74060] h-[.1875rem]"></div>
      </div>
      <div class="grid grid-cols-4">
        @for (item of productCard; track item.id) {
          <div class="mb-[.9375rem] px-[.9375rem]">
            <a [routerLink]="item.link">
              <div class="">
                <img [src]="item.img1" [alt]="item.title" />
              </div>
              <div class="pb-6 pt-[.625rem]">
                <div class="line-clamp-2 text-sm text-center mb-1">
                  {{ item.title }}
                </div>
                <div>
                  <div class="text-base font-bold text-center text-[#C74060]">{{ item.price }}</div>
                  <div class="text-center line-through">{{ item.oldPrice }}</div>
                </div>
              </div>
            </a>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Product {
  productCard: ProductItem[] = [
    {
      id: 1,
      img1: '/product1a.webp',
      img: '/product1.webp',
      title: 'CATISS 三代貓掌護唇膏+護手霜 禮盒組',
      link: '/product1',
      price: 'NT$799',
      oldPrice: 'NT$848',
    },
    {
      id: 2,
      img1: '/product2a.webp',
      img: '/product2.webp',
      title: '原子少年2X CATISS聯名商品A套組（妝前乳+護手霜組）及B套組（貓掌護脣膏花色隨機）',
      link: '/product2',
      price: 'NT$600 ~ NT$1,000',
      oldPrice: 'NT$1,200',
    },
    {
      id: 3,
      img1: '/product3a.webp',
      img: '/product3.webp',
      title: '【即期福利品】麻吉貓護唇膏純淨水潤（原味）',
      link: '/product3',
      price: 'NT$199',
      oldPrice: 'NT$549',
    },
    {
      id: 4,
      img1: '/product4a.webp',
      img: '/product4.webp',
      title: 'CATISS長效妝前乳',
      link: '/product4',
      price: 'NT$499',
      oldPrice: 'NT$550',
    },
    {
      id: 5,
      img1: '/product5a.webp',
      img: '/product5.webp',
      title: 'CATISS貓掌護唇膏補充蕊-海藻糖去角質【適用三代護唇膏】即期優惠價',
      link: '/product5',
      price: 'NT$150',
      oldPrice: 'NT$249',
    },
    {
      id: 6,
      img1: '/product6a.webp',
      img: '/product6.webp',
      title: 'CATISS貓掌護唇膏補充蕊-天然純淨植萃【適用三代護唇膏】即期優惠價',
      link: '/product6',
      price: 'NT$150',
      oldPrice: 'NT$249',
    },
    {
      id: 7,
      img1: '/product7a.webp',
      img: '/product7.webp',
      title: 'CATISS 【三代】 貓掌護唇膏 + 補充蕊 禮盒裝',
      link: '/product7',
      price: 'NT$749',
      oldPrice: 'NT$873',
    },
    {
      id: 8,
      img1: '/product8a.webp',
      img: '/product8.webp',
      title: 'CATISS 貓掌護唇膏+洋甘菊保濕舒緩隱形面膜(6入)',
      link: '/product8',
      price: 'NT$699',
      oldPrice: 'NT$1,005',
    },
    {
      id: 9,
      img1: '/product9a.webp',
      img: '/product9.webp',
      title: '(即期特價) CATISS洋甘菊保濕舒緩隱形面膜(6入)',
      link: '/product9',
      price: 'NT$199',
      oldPrice: 'NT$360',
    },
    {
      id: 10,
      img1: '/product10a.webp',
      img: '/product10.webp',
      title: 'CATISS 【三代】貓掌護唇膏 - 石虎純淨水潤',
      link: '/product10',
      price: 'NT$599',
    },
    {
      id: 11,
      img1: '/product11a.webp',
      img: '/product11.webp',
      title: 'CATISS 【三代】貓掌護唇膏補充蕊-洋甘菊',
      link: '/product11',
      price: 'NT$209',
      oldPrice: 'NT$269',
    },
    {
      id: 12,
      img1: '/product12a.webp',
      img: '/product12.webp',
      title: 'CATISS貓掌護唇膏補充蕊-口紅-焗烤南瓜【適用三代護唇膏】',
      link: '/product12',
      price: 'NT$249',
      oldPrice: 'NT$289',
    },
  ];
}
