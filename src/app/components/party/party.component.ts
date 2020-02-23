import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PartyAgeData } from 'src/app/interfaces/party-age-data';
import { PartyEducationData } from 'src/app/interfaces/party-education-data';
import { PartyGeoData } from 'src/app/interfaces/party-geo-data';
import { PartyJobData } from 'src/app/interfaces/party-job-data';
import { PartyListItem } from 'src/app/interfaces/party-list-item';
import { DataService } from 'src/app/services/data.service';

import * as CanvasJS from './../../canvasjs.min';

@Component({
  selector: "app-party",
  templateUrl: "./party.component.html",
  styleUrls: ["./party.component.css"]
})
export class PartyComponent implements OnInit, OnChanges {
  @Input() partyId: number;
  @Output() navLeft = new EventEmitter();
  @Output() navRight = new EventEmitter();

  party: PartyListItem;

  // Party DataSets
  ageData: PartyAgeData;
  educationData: PartyEducationData;
  geoData: PartyGeoData;
  jobData: PartyJobData;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.party = this.dataService.getPartyListItem(this.partyId);
    this.ageData = this.dataService.getAgeData(this.partyId);
    this.educationData = this.dataService.getEducationData(this.partyId);
    this.geoData = this.dataService.getGeoData(this.partyId);
    this.jobData = this.dataService.getJobData(this.partyId);

    this.renderCharts();
  }

  renderCharts() {
    const ageChart = new CanvasJS.Chart("chart-age", {
      animationEnabled: true,
      title: {
        text: "Vekové zastúpenie kandidátov"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.ageData.age_below_25, label: "> 25" },
            { y: this.ageData.age_25_35, label: "25 - 35" },
            { y: this.ageData.age_35_45, label: "35 - 45" },
            { y: this.ageData.age_45_55, label: "45 - 55" },
            { y: this.ageData.age_55_65, label: "55 - 65" },
            { y: this.ageData.age_above_65, label: "> 65" }
          ]
        }
      ]
    });

    const educationChart = new CanvasJS.Chart("chart-education", {
      animationEnabled: true,
      title: {
        text: "Najvyššie dosiahnuté vzdelanie kandidátov"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.educationData.grade_1, label: "Bc." },
            { y: this.educationData.grade_2, label: "2. stupeň VŠ" },
            { y: this.educationData.grade_3, label: "3. stupeň VŠ" },
            { y: this.educationData.no_grade, label: "Bez VŠ vzdelania" }
          ]
        }
      ]
    });

    const jobChart = new CanvasJS.Chart("chart-job", {
      animationEnabled: true,
      title: {
        text: "Zamestnanie kandidátov"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.jobData.enterpreneur, label: "Podnikatelia" },
            { y: this.jobData.retiree, label: "Dôchodci" },
            { y: this.jobData.unemploee, label: "Nezamestnaní" },
            { y: this.jobData.other, label: "Iné" }
          ]
        }
      ]
    });

    const geoChart = new CanvasJS.Chart("chart-geo", {
      animationEnabled: true,
      title: {
        text: "Bydlisko kandidátov"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: this.geoData.ba, label: "Bratislava" },
            { y: this.geoData.ke, label: "Košice" },
            { y: this.geoData.po, label: "Prešov" },
            { y: this.geoData.nr, label: "Nitra" },
            { y: this.geoData.za, label: "Žilina" },
            { y: this.geoData.bb, label: "Banská Bystrica" },
            { y: this.geoData.tt, label: "Trnava" },
            { y: this.geoData.mt, label: "Martin" },
            { y: this.geoData.tr, label: "Trenčín" },
            { y: this.geoData.pp, label: "Poprad" },
            { y: this.geoData.pn, label: "Piešťany" }
            // { y: this.geoData.other, label: "Iná obec" }
          ]
        }
      ]
    });

    ageChart.render();
    educationChart.render();
    jobChart.render();
    geoChart.render();
  }
}
