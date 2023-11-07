import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../nav/nav-sidebar';
import { SidebarInterface } from '../../interfaces/interfaces-modes';

@Component({
     selector: 'app-header',
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
     isToggleSidebar!: boolean;
     navSidebar: SidebarInterface[] = Sidebar;

     ngOnInit(): void {
          this.isToggleSidebar = false;
     }

     onToggleSidebar() {
          this.isToggleSidebar ? (this.isToggleSidebar = false) : (this.isToggleSidebar = true);
     }
}
