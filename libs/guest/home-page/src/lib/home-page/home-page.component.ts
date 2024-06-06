import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent,
    IntroduceComponent,
    SearchBarComponent,
    HotDealComponent,
    FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
