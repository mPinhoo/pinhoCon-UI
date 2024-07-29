import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  get title(): any {
    let title = this.router.url.substr(1);
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title
  }

}
