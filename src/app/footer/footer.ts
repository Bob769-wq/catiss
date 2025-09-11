import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  title: string;
  link?: string;
  children?: FooterList[];
}
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="w-[87.5rem] max-w-full px-5 py-[.9375rem] mx-auto">
      <div class="border-t border-t-[#F7F7F7]">
        <div class="px-12">
          <div class="grid grid-cols-3 justify-center gap-8 py-8">
            @for (item of footerPart; track item.id) {
              <div class="w-full">
                <div
                  class="bg-[#F8F8F8] w-full text-lg
           py-2 font-bold text-center text-[#865541]"
                >
                  {{ item.title }}
                </div>
                <ul class="text-center mt-6">
                  @for (sub of item.children; track sub.id) {
                    <li>
                      <a [routerLink]="sub.link" class="hover:text-[#666666]">{{ sub.title }}</a>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </div>

    <div class="w-[87.5rem] max-w-full px-5 py-[.9375rem] mx-auto">
      <div class="mt-12 px-12 py-8 flex justify-between">
        <div class="flex flex-1 gap-6">
          <img class="h-10" src="/711.png" alt="711" />
          <img class="h-10" src="/line.png" alt="line" />
          <img class="h-10" src="/visa.png" alt="visa" />
          <img class="h-10" src="/master.png" alt="master" />
          <img class="h-10" src="/jcb.png" alt="jcb" />
          <img class="h-10" src="/union.png" alt="union" />
        </div>
        <div class="flex flex-1 justify-center">
          <a class="cursor-pointer"><img src="/social_line.png" class="h-11" alt="s-line" /></a>
          <a class="cursor-pointer"><img src="/social_instagram.png" class="h-11" alt="s-ins" /></a>
          <a class="cursor-pointer"><img src="/social_facebook.png" class="h-11" alt="s-fb" /></a>
        </div>
      </div>
    </div>

    <div class="bg-[#F7F7F7] flex gap-6 py-6 justify-center">
      <a class="bg-white" routerLink="/change">退換貨政策</a>
      <a class="bg-white" routerLink="/privacy">隱私權政策</a>
    </div>
  `,
  styles: ``,
})
export class Footer {
  footerPart: FooterList[] = [
    {
      id: 1,
      title: '聯絡我們',
      children: [
        { id: 1, title: '客服信箱', link: '/service' },
        { id: 2, title: 'LINE官方帳號', link: '/line' },
        { id: 3, title: '商業合作信箱', link: '/cooperate' },
      ],
    },
    {
      id: 2,
      title: '配送須知',
      children: [
        { id: 1, title: '海外訂購須知', link: '/abroad' },
        { id: 2, title: '一般購物須知', link: '/normal' },
      ],
    },
    {
      id: 3,
      title: '常見Q&A',
      children: [
        { id: 1, title: '會員權益說明', link: '/right' },
        { id: 2, title: '問與答', link: '/qa' },
      ],
    },
  ];
}
