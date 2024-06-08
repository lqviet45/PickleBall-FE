import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-hot-deal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hot-deal.component.html',
  styleUrl: './hot-deal.component.css',
})
export class HotDealComponent {
  courts = [
    { name: 'Pickle Court 1', description: 'Description of Pickle Court 1', image: 'assets/pickle-court1.jpg' },
    { name: 'Pickle Court 2', description: 'Description of Pickle Court 2', image: 'assets/pickle-court2.jpg' },
    // Add more court objects as needed
  ];
}
