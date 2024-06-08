import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatIcon, MatButton, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeButton = '';

  constructor(private router: Router) {}

  setActiveButton(button: string) {
    this.activeButton = button;
    this.scrollToSection(button);
  }
  scrollToSection(sectionId: string) {
    this.router.navigate([], { fragment: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onLogin() {
    // Logic for login button click
    console.log('Login button clicked');
  }
}
