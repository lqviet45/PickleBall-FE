import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HeaderOwnerComponent} from "../header-owner/header-owner.component";
import {SidenavOwnerComponent} from "../sidenav-owner/sidenav-owner.component";


@Component({
  selector: 'lib-owner',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, HeaderOwnerComponent, SidenavOwnerComponent],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.scss',
})
export class OwnerComponent {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
