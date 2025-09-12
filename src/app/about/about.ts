import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <div class="py-[.9375rem] mb-5">
      <div class="pt-[.625rem] pb-[3.3125rem]">
        <div class="flex flex-col items-center ">
          <h2 class="tracking-widest text-xl text-center pb-5 pt-[.625rem]">
            <strong>/ 關於CATISS /</strong>
          </h2>
          <div class=" w-6 bg-[#c74060] h-[.1875rem]"></div>
        </div>
      </div>
      <p class="text-[#909090]">
        CATISS 為 Cat &
        Kiss的縮寫，一個由現任貓奴創立的，致力於為貓奴謀幸福的美妝保養品牌。一群熱愛毛小孩的團隊青年們，傾情用心，開發療癒心靈的商品外觀更同時追求高水準的成分及質感。堅持全產品100%台灣製造，堅持所有原料對環境、動物友善，堅持打造完備的售後服務。期望能用我們的堅持，帶給消費者真正的身心靈療癒體驗。
      </p>
    </div>

    <div class="mb-12">
      <a class="cursor-pointer"><img src="/about-banner.webp" alt="about" /></a>
    </div>
    <div class="mb-5">
      <div class=" grid justify-center  mid:grid-cols-3">
        <a routerLink="/about1"
          ><img src="/about1.webp" class="w-[720px] mid:w-auto" alt="about1"
        /></a>
        <a routerLink="/about2"
          ><img src="/about2.webp" class="w-[720px] mid:w-auto" alt="about2"
        /></a>
        <a routerLink="/about3"
          ><img src="/about3.webp" class="w-[720px] mid:w-auto" alt="about3"
        /></a>
      </div>
    </div>
    <div class="flex flex-col items-end font-bold text-base text-[#666]">
      <p>貓掌護唇膏專利證書</p>
      <p>第<span class="text-[#333]">TWD183300S號｜TWD182185S號</span></p>
    </div>
  `,
  styles: ``,
})
export class AboutUs {}
