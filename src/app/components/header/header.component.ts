import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { NavigationEnd, Router, Event, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter();
  isWhite: boolean;

  // Sticky header
  isSticky = false;
  @HostListener('window:scroll', [])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  constructor(
    public router: Router,
    public readonly route: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter((event: Event) => {
        return event instanceof NavigationEnd;
      })
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('home')) {
        this.isWhite = false;
      } else {
        this.isWhite = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
