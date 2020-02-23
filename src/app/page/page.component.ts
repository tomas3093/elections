import { Component, OnInit } from '@angular/core';

import { PageType } from '../enums/page-type.enum';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  currentPage: PageType;

  ngOnInit() {
    this.currentPage = PageType.OVERVIEW;
  }

  get isOverview() {
    return this.currentPage === PageType.OVERVIEW;
  }

  get isParty() {
    return this.currentPage === PageType.PARTY;
  }
}
