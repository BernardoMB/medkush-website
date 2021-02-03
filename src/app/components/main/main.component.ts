import { Component, OnInit, HostListener, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  /* encapsulation: ViewEncapsulation.None */
})
export class MainComponent implements OnInit {
  opened: boolean;
  searchControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value: string) => {

    });
  }

  scrollToTop() {
    //window.scrollTo(0, 0);
  }

  /* scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  } */

  onOpenedStart() {
    this._document.body.classList.add('no-scroll');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
  }

  onClosedStart() {
    this._document.body.classList.remove('no-scroll');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
  }

}
