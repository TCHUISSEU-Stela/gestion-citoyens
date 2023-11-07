import { Component, Input } from '@angular/core';
import { SidebarInterface } from '../../interfaces/interfaces-modes';

@Component({
     selector: 'c-sidebar',
     templateUrl: './sidebar.component.html',
     styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
     @Input() navSidebar!: SidebarInterface[];
}
