import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    //window.scrollTo(0, 0);
  }

}
