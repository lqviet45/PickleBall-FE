import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '@org/header';
import { SidenavComponent } from '@org/sidenav';
import { HomeComponent } from '@org/home';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MatSidenavModule,
    HeaderComponent,
    SidenavComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pickleball-app';

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
