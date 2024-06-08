import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

interface Club {
  name: string;
  description: string;
}
@Component({
  selector: 'lib-club',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, MatIconButton],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubComponent {
  clubs: Club[] = [
    { name: 'Club 1', description: 'Description 1' },
    { name: 'Club 2', description: 'Description 2' },
    { name: 'Club 3', description: 'Description 3' },
    { name: 'Club 4', description: 'Description 4' },
    { name: 'Club 5', description: 'Description 5' },
    { name: 'Club 6', description: 'Description 6' },
    // Add more clubs as needed
  ];

  currentPage = 1;
  clubsPerPage = 4;

  get clubsToShow(): Club[] {
    const startIndex = (this.currentPage - 1) * this.clubsPerPage;
    return this.clubs.slice(startIndex, startIndex + this.clubsPerPage);
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }
}
