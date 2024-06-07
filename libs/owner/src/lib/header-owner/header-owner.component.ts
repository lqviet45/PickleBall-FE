import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButton, MatIconButton} from "@angular/material/button";


@Component({
  selector: 'lib-header-owner',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, NgOptimizedImage, MatButton, MatIconButton],
  templateUrl: './header-owner.component.html',
  styleUrl: './header-owner.component.scss',
})
export class HeaderOwnerComponent {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ToggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

}
