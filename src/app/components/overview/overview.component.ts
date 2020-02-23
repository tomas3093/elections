import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartyListItem } from 'src/app/interfaces/party-list-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  @Output() itemClicked = new EventEmitter<number>();

  parties: PartyListItem[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.parties = this.dataService.getAllParties();
  }
}
