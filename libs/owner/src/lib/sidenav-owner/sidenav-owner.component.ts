import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListSubheaderCssMatStyler, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'lib-sidenav-owner',
  standalone: true,
  imports: [CommonModule, MatDivider, MatIcon, MatListItem, MatListSubheaderCssMatStyler, MatNavList, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './sidenav-owner.component.html',
  styleUrl: './sidenav-owner.component.scss',
})
export class SidenavOwnerComponent {}
