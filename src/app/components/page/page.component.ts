import { Component, OnInit } from '@angular/core';

import { PageType } from '../../enums/page-type.enum';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  currentPage: PageType;
  showedParty: number;

  constructor() {}

  ngOnInit() {
    this.currentPage = PageType.OVERVIEW;
    this.showedParty = 1;
  }

  showParty(partyId: number) {
    this.showedParty = partyId;
    this.currentPage = PageType.PARTY;
  }

  showNextParty(left: boolean) {
    if (left) {
      this.showedParty--;
      this.showedParty = this.showedParty < 1 ? 25 : this.showedParty;
    } else {
      this.showedParty++;
      this.showedParty = this.showedParty > 25 ? 1 : this.showedParty;
    }
  }

  showPage(pageType: PageType) {
    this.currentPage = pageType;
  }

  get overview() {
    return PageType.OVERVIEW;
  }

  get party() {
    return PageType.PARTY;
  }

  get comparison() {
    return PageType.COMPARISON;
  }

  get about() {
    return PageType.ABOUT;
  }

  get isOverview() {
    return this.currentPage === PageType.OVERVIEW;
  }

  get isParty() {
    return this.currentPage === PageType.PARTY;
  }

  get isComparison() {
    return this.currentPage === PageType.COMPARISON;
  }

  get isAbout() {
    return this.currentPage === PageType.ABOUT;
  }
}
