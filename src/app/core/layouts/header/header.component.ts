import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-header',
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
     isToggleSidebar!: boolean;

     ngOnInit(): void {
          this.isToggleSidebar = false;
     }

     onToggleSidebar() {
          this.isToggleSidebar ? (this.isToggleSidebar = false) : (this.isToggleSidebar = true);
     }
}
