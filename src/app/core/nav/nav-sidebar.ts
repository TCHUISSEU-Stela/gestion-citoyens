import { SidebarInterface } from '../interfaces/interfaces-modes';

export const Sidebar: SidebarInterface[] = [
     { label: 'Dashboard', icon: 'bi bi-grid', routerlink: '' },
     {
          label: 'Components',
          icon: 'bi bi-menu-button-wide',
          item: [
               { label: 'Alerts', icon: 'bi bi-circle', routerlink: '' },
               { label: 'Accordion', icon: 'bi bi-circle', routerlink: '' },
          ],
     },
     { label: 'Error 404', icon: 'bi bi-dash-circle', routerlink: '/dddddd' },
     { label: 'Login', icon: 'bi bi-box-arrow-in-right', routerlink: 'auth/login' },
     { label: 'Register', icon: 'bi bi-card-list', routerlink: 'auth/register' },
     { label: 'Profile', icon: 'bi bi-person', routerlink: '' },
];

export const SidebarAdmin: SidebarInterface[] = [];
