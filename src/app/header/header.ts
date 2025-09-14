import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
  isExpanded?: boolean;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, MatMenu, MatMenuTrigger, MatMenuItem, ReactiveFormsModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white z-30">
      <div class="flex justify-between items-center big:hidden">
        <div class="flex">
          <a class="h-[60px] w-[180px] px-[.9375rem] py-2 cursor-pointer">
            <img src="/mobile-logo.webp" class="max-h-full max-w-full" alt="logo" />
          </a>
        </div>

        <ul class="flex items-center">
          <li
            class="mx-2 text-[#333333] hover:text-[#888888] cursor-pointer"
            (click)="searchBarOpen()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="currentColor"
                d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
              />
            </svg>
          </li>

          @if (isSearchBarOpen()) {
            <div class="fixed inset-0 z-50 lg:hidden">
              <div class="absolute inset-0 bg-black bg-opacity-50" (click)="closeSearch()"></div>
              <div class="relative bg-white">
                <div class="flex items-center gap-2 p-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 640 640"
                    >
                      <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                      <path
                        fill="currentColor"
                        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      />
                    </svg>
                  </button>
                  <form [formGroup]="form" class="flex-1">
                    <input
                      class="w-full text-lg border-b border-b-black outline-none"
                      type="text"
                      placeholder="找商品"
                      formControlName="searchControl"
                    />
                  </form>
                </div>
              </div>
            </div>
          }

          <li class="mx-2 text-[#333333] hover:text-[#888888] cursor-pointer">
            <a routerLink="/user">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="currentColor"
                  d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                />
              </svg>
            </a>
          </li>
          <li class="mx-2 text-[#333333] hover:text-[#888888] cursor-pointer">
            <a routerLink="/bag">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="currentColor"
                  d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z"
                />
              </svg>
            </a>
          </li>
          <li
            class="m1-2 text-[#333333] hover:text-[#888888] cursor-pointer"
            (click)="toggleMenu()"
          >
            <div class="w-[60px] h-[60px] flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="currentColor"
                  d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="big:block w-[87.5rem] max-w-full min-h-20 px-5 py-[.9375rem] mx-auto bg-white hidden"
      >
        <div class="flex flex-col items-center relative">
          <a class="max-h-[6.25rem] cursor-pointer"
            ><img src="/logo.webp" class="max-h-[6.25rem]" alt="logo"
          /></a>
          <div class="mx-auto mt-[.625rem] ">
            <ul class="flex gap-5 p-[.625rem]">
              @for (item of navItems; track item.id) {
                @if (item.children && item.children.length > 0) {
                  <li
                    class="text-[#333] text-[.9375rem] hover:text-[#C74060] cursor-pointer relative"
                    (mouseenter)="showDropdown(item.id)"
                    (mouseleave)="hideDropdown()"
                  >
                    <a [routerLink]="item.link" class="mb-5 flex items-center gap-1">
                      <span>{{ item.title }}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="13"
                        width="13"
                        viewBox="0 0 640 640"
                      >
                        <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path
                          fill="currentColor"
                          d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
                        />
                      </svg>
                    </a>
                    <div
                      class="w-[200px] absolute top-full z-50 bg-white shadow-md"
                      [class.hidden]="openDropDownById() !== item.id"
                    >
                      <ul>
                        @for (sub of item.children; track sub.id) {
                          <li
                            class="text-[#333] text-[.9375rem] hover:text-[#C74060] cursor-pointer"
                          >
                            <a [routerLink]="sub.link" class="px-4 py-3 block">{{ sub.title }}</a>
                          </li>
                        }
                      </ul>
                    </div>
                  </li>
                } @else {
                  <li class="text-[#333] text-[.9375rem] hover:text-[#C74060] cursor-pointer">
                    <a [routerLink]="item.link" class="mb-5">{{ item.title }}</a>
                  </li>
                }
              }
            </ul>
          </div>
          <ul class="absolute top-0 right-0 flex">
            <li class="ml-5 text-[#333333] hover:text-[#888888] cursor-pointer">
              <button class="flex items-center gap-1" [matMenuTriggerFor]="menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="currentColor"
                    d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"
                  />
                </svg>
                <span>繁體中文</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
                  width="15"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="currentColor"
                    d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
                  />
                </svg>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item>English</button>
                <button mat-menu-item>繁體中文</button>
              </mat-menu>
            </li>
            <li class="ml-5 text-[#333333] hover:text-[#888888] cursor-pointer relative flex">
              <div
                class="flex items-center"
                (mouseenter)="isFormOpen.set(true)"
                (mouseleave)="isFormOpen.set(false)"
              >
                <form
                  [formGroup]="form"
                  class="transition-all duration-700 ease-in-out overflow-hidden"
                  [class]="isFormOpen() ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'"
                >
                  <input
                    class="border-b border-b-gray-300 focus:outline-none"
                    type="text"
                    placeholder="找商品"
                    formControlName="searchControl"
                  />
                </form>

                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 640 640"
                  >
                    <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path
                      fill="currentColor"
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li class="ml-5 text-[#333333] hover:text-[#888888] cursor-pointer">
              <a routerLink="/comment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="currentColor"
                    d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-5 text-[#333333] hover:text-[#888888] cursor-pointer">
              <a routerLink="/user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="currentColor"
                    d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-5 text-[#333333] hover:text-[#888888] cursor-pointer">
              <a routerLink="/bag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="currentColor"
                    d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      [class]="isMenuOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggleMenu()"
    ></div>
    <div
      class="fixed top-0 left-0 h-full w-72 bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isMenuOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <ul class="pb-[.9375rem] border-b px-[.9375rem]">
        @for (item of navItems; track item.id) {
          @if (item.children && item.children.length > 0) {
            <li class="flex items-center justify-between">
              <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem]"
                >{{ item.title }}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="13"
                viewBox="0 0 640 640"
                class="cursor-pointer "
                (click)="toggleSub(item)"
              >
                <!--!Font Awesome Pro v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#000000"
                  d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
                />
              </svg>
            </li>
            @if (item.isExpanded) {
              <ul>
                @for (child of item.children; track child.id) {
                  <li class="text-[#aaa] flex">
                    <a [routerLink]="child.link" class="px-5 py-[.9375rem]">{{ child.title }}</a>
                  </li>
                }
              </ul>
            }
          }
          <li class="flex">
            <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem] font-normal">{{
              item.title
            }}</a>
          </li>
        }
      </ul>
      <div class="px-[.9375rem] pt-[1.5625rem] pb-[.6875rem] text-xl">分類</div>
      <ul class="pb-[.9375rem] border-b px-[.9375rem]">
        @for (item of sortItems; track item.id) {
          @if (item.children && item.children.length > 0) {
            <li class="flex items-center justify-between">
              <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem]"
                >{{ item.title }}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="13"
                viewBox="0 0 640 640"
                class="cursor-pointer "
                (click)="toggleSub(item)"
              >
                <!--!Font Awesome Pro v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#000000"
                  d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
                />
              </svg>
            </li>
            @if (item.isExpanded) {
              <ul>
                @for (child of item.children; track child.id) {
                  <li class="text-[#aaa] flex">
                    <a [routerLink]="child.link" class="px-5 py-[.9375rem]">{{ child.title }}</a>
                  </li>
                }
              </ul>
            }
          }
          <li class="flex">
            <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem] font-normal">{{
              item.title
            }}</a>
          </li>
        }
      </ul>
      <div class="px-[.9375rem] pt-[1.5625rem] pb-[.6875rem] text-xl">帳號</div>
      <ul class="pb-[.9375rem] border-b px-[.9375rem]">
        @for (item of accountItems; track item.id) {
          <li class="flex">
            <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem] font-normal">{{
              item.title
            }}</a>
          </li>
        }
      </ul>
      <div class="px-[.9375rem] pt-[1.5625rem] pb-[.6875rem] text-xl">分類</div>
      <ul class="pb-[.9375rem] border-b px-[.9375rem]">
        @for (item of otherItems; track item.id) {
          @if (item.link === '/contact') {
            <li class="flex justify-between items-center">
              <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem] font-normal">{{
                item.title
              }}</a>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z"
                />
              </svg>
            </li>
          } @else {
            <li class="flex justify-between items-center">
              <a [routerLink]="item.link" class="py-[.9375rem] text-[.9375rem] font-normal">{{
                item.title
              }}</a>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"
                />
              </svg>
            </li>
          }
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class Header {
  openDropDownById = signal<number | null>(null);
  showDropdown(id: number) {
    this.openDropDownById.set(id);
  }
  hideDropdown() {
    this.openDropDownById.set(null);
  }

  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  toggleSub(item: NavList) {
    if (item.children && item.children.length > 0) {
      item.isExpanded = !item.isExpanded;
    }
  }

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control(''),
  });

  isFormOpen = signal(false);

  isSearchBarOpen = signal(false);
  searchBarOpen() {
    this.isSearchBarOpen.set(true);
  }
  closeSearch() {
    this.isSearchBarOpen.set(false);
  }

  navItems: NavList[] = [
    { id: 1, title: '關於CATISS', link: '/catiss' },
    { id: 2, title: '所有商品', link: '/all' },
    {
      id: 3,
      title: 'CATISS貓掌護唇膏',
      link: '/',
      isExpanded: false,
      children: [
        { id: 1, title: '新三代-貓掌護唇膏', link: '/3lips' },
        { id: 2, title: '三代護唇膏補充蕊', link: '/supply' },
      ],
    },
    {
      id: 4,
      title: '臉部美妝保養',
      link: '/',
      isExpanded: false,
      children: [
        { id: 1, title: '水水粉嫩瓶系列', link: '/water' },
        { id: 2, title: '面膜系列', link: '/mask' },
      ],
    },
    {
      id: 5,
      title: '手部護理',
      link: '/',
      isExpanded: false,
      children: [{ id: 1, title: '白茉貓水潤護甲護手霜', link: '/jasmine' }],
    },
    { id: 6, title: '部落格首頁', link: '/blog' },
  ];
  sortItems: NavList[] = [
    { id: 1, title: '精選商品', link: '/sort' },
    { id: 2, title: '限時優惠組合', link: '/sort' },
    { id: 3, title: '送禮推薦', link: '/sort' },
    {
      id: 4,
      title: '新三代-貓掌護唇膏',
      link: '/sort',
      isExpanded: false,
      children: [{ id: 1, title: '三代貓掌護唇膏', link: '/sort' }],
    },
    { id: 5, title: '白茉貓水潤護甲護手霜', link: '/sort' },
    { id: 6, title: '面膜系列', link: '/sort' },
  ];
  accountItems: NavList[] = [
    { id: 1, title: '會員登入', link: '/account' },
    { id: 2, title: '新用戶註冊', link: '/account' },
  ];
  otherItems: NavList[] = [
    { id: 1, title: '聯絡我們', link: '/contact' },
    { id: 2, title: '繁體中文', link: '/language' },
  ];
}
