import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Autoplay]);

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [],
  templateUrl: './caroussel.component.html',
})
export class CarousselComponent implements AfterViewInit {
  // Inject the platform ID to check if we're on the server or browser.
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Wait until after the view is initialized to instantiate the carousel.
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.swiper-container', {
        // Enable navigation and pagination
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Enable autoplay
        autoplay: {
          delay: 5000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Autoplay will not pause when the mouse is over the carousel
        },
      });
    }
  }
}
