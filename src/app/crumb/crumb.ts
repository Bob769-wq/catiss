import { Component } from '@angular/core';

@Component({
  selector: 'app-crumb',
  imports: [],
  template: `
    <div class="p-[.9375rem] mb-5">
      <p><strong>反詐騙小叮嚀</strong></p>
      <p>
        提醒您，CATISS不會主動以電話聯絡索取個人的金融帳號、信用卡相關資料、或要求解除分期付款。如接到可疑來電，請勿輕信不明來電
      </p>
      <p>可撥165防詐騙專線通報，或與CATISS克服 聯繫</p>
    </div>
  `,
  styles: ``,
})
export class Crumb {}
