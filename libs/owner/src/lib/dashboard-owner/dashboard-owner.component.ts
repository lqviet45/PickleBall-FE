import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lib-dashboard-owner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-owner.component.html',
  styleUrl: './dashboard-owner.component.scss',
})
export class DashboardOwnerComponent {
  public routerLinkVariable = '/home';
}
