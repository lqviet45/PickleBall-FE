import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';

@Component({
  selector: 'lib-search-bar',
  standalone: true,
  imports: [CommonModule, MatInput, MatFormField, MatSelect, MatOption, MatButton, FormsModule, MatDatepickerToggle, MatDatepicker],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchQuery = '';
  selectedOption1 = '';
  selectedOption2 = '';
  selectedOption3 = '';

  options1: string[] = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  options2: string[] = ['Option 2.1', 'Option 2.2', 'Option 2.3'];
  options3: string[] = ['Option 3.1', 'Option 3.2', 'Option 3.3'];

  onSearch() {
    // Handle the search logic here
    console.log('Search Query:', this.searchQuery);
    console.log('Selected Option 1:', this.selectedOption1);
    console.log('Selected Option 2:', this.selectedOption2);
    console.log('Selected Option 3:', this.selectedOption3);
  }
}
