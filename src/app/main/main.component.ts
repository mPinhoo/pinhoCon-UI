import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy, OnInit {
  private ngUnsubscribe$: Subject<void> = new Subject<void>();

  currentRoute: any;

  constructor(private router: Router, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        this.currentRoute = this.router.url;
        return;
      }
      this.changeDetector.detectChanges();
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }


  goBack() {
    window.history.back()
  }

}
