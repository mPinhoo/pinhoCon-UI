import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sideMenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(
  ) {

  }

  public routeNavigation(route: string) {
    switch(route) {
      case 'dashboard':
        this.router.navigate(['/dashboard'])
        break;
      
      case 'all-properties':
        this.router.navigate(['/all-properties'])
        break;

      case 'add-properties':
        this.router.navigate(['/add-properties'])
        break;

      case 'all-agents':
        this.router.navigate(['/all-agents'])
        break;
      
      case 'add-agent':
        this.router.navigate(['/add-agent'])
        break;

      default:
        this.router.navigate(['/dashboard'])
    }
  }
}
