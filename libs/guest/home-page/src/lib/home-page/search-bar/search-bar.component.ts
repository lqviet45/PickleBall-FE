import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'lib-search-bar',
  standalone: true,
  imports: [CommonModule, MatInput, MatFormField, MatSelect, MatOption, MatButton, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchQuery = '';
  selectedCity = '';
  selectedNop = '';
  selectedOption3 = '';

  city: string[] = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  nop: string[] = ['2', '3', '4'];

  onSearch() {
    // Handle the search logic here
    console.log('Search Query:', this.searchQuery);
    console.log('Selected City:', this.city);
    console.log('Selected Number of players:', this.nop);
  }
}
