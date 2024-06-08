import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';
import { FooterComponent } from './footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { NewsComponent } from './news/news.component';
@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent,
    IntroduceComponent,
    SearchBarComponent,
    HotDealComponent,
    ClubComponent,
    NewsComponent,
    FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements AfterViewInit  {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
