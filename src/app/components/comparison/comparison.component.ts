import { Component, OnInit } from '@angular/core';
import { partyName, TopParty } from 'src/app/enums/top-party.enum';
import { PartiesAge } from 'src/app/interfaces/parties-age';
import { PartiesEducation } from 'src/app/interfaces/parties-education';
import { PartiesGeo } from 'src/app/interfaces/parties-geo';
import { PartiesJob } from 'src/app/interfaces/parties-job';
import { DataService } from 'src/app/services/data.service';

import * as CanvasJS from './../../canvasjs.min';

@Component({
  selector: "app-comparison",
  templateUrl: "./comparison.component.html",
  styleUrls: ["./comparison.component.css"]
})
export class ComparisonComponent implements OnInit {
  // Party DataSets
  ageData: PartiesAge;
  educationData: PartiesEducation;
  geoData: PartiesGeo;
  jobData: PartiesJob;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ageData = this.dataService.getPartiesAgeData();
    this.educationData = this.dataService.getPartiesEducationData();
    this.geoData = this.dataService.getPartiesGeoData();
    this.jobData = this.dataService.getPartiesJobData();

    this.renderCharts();
  }

  renderCharts() {
    const avgAgeChart = new CanvasJS.Chart("chart-avg-age", {
      animationEnabled: true,
      title: {
        text: "Priemerný vek kandidátov strán"
      },
      axisX: {
        interval: 1,
        labelAngle: 145
      },
      axisY: {
        minimum: 35,
        maximum: 50
      },
      toolTip: {
        shared: false,
        content: "{label} - {y} rokov"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_avg,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            { y: this.ageData.KDH.age_avg, label: partyName(TopParty.KDH) },
            { y: this.ageData.LSNS.age_avg, label: partyName(TopParty.LSNS) },
            {
              y: this.ageData.MKO_MKS.age_avg,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_avg,
              label: partyName(TopParty.MOST_HID)
            },
            { y: this.ageData.OLANO.age_avg, label: partyName(TopParty.OLANO) },
            {
              y: this.ageData.PS_SPOLU.age_avg,
              label: partyName(TopParty.PS_SPOLU)
            },
            { y: this.ageData.SAS.age_avg, label: partyName(TopParty.SAS) },
            { y: this.ageData.SMER.age_avg, label: partyName(TopParty.SMER) },
            {
              y: this.ageData.SME_RODINA.age_avg,
              label: partyName(TopParty.SME_RODINA)
            },
            { y: this.ageData.SNS.age_avg, label: partyName(TopParty.SNS) },
            { y: this.ageData.VLAST.age_avg, label: partyName(TopParty.VLAST) },
            {
              y: this.ageData.ZA_LUDI.age_avg,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        }
      ]
    });

    function toggleDataSeriesAgeChart(e) {
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      ageChart.render();
    }

    function toggleDataSeriesEducationChart(e) {
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      educationChart.render();
    }

    function toggleDataSeriesJobChart(e) {
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      jobChart.render();
    }

    const ageChart = new CanvasJS.Chart("chart-age", {
      animationEnabled: true,
      title: {
        text: "Vekové zastúpenie kandidátov strán",
        fontSize: 28
      },
      subtitles: [
        {
          text: "Filtrovanie klikom na kategóriu",
          fontSize: 16
        }
      ],
      axisX: {
        interval: 1
      },
      axisY: {
        title: "% zo všetkých kandidátov",
        titleFontSize: 18
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeriesAgeChart
      },
      toolTip: {
        shared: false,
        content: "{label} - <b>Vek {name}</b>: {y} %"
      },
      data: [
        {
          type: "bar",
          showInLegend: true,
          name: "< 25",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_below_25,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.ageData.KDH.age_below_25,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.ageData.LSNS.age_below_25,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.ageData.MKO_MKS.age_below_25,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_below_25,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_below_25,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_below_25,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.ageData.SAS.age_below_25,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.ageData.SMER.age_below_25,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.ageData.SME_RODINA.age_below_25,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.ageData.SNS.age_below_25,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.ageData.VLAST.age_below_25,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_below_25,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "25 - 35",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_25_35,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            { y: this.ageData.KDH.age_25_35, label: partyName(TopParty.KDH) },
            { y: this.ageData.LSNS.age_25_35, label: partyName(TopParty.LSNS) },
            {
              y: this.ageData.MKO_MKS.age_25_35,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_25_35,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_25_35,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_25_35,
              label: partyName(TopParty.PS_SPOLU)
            },
            { y: this.ageData.SAS.age_25_35, label: partyName(TopParty.SAS) },
            { y: this.ageData.SMER.age_25_35, label: partyName(TopParty.SMER) },
            {
              y: this.ageData.SME_RODINA.age_25_35,
              label: partyName(TopParty.SME_RODINA)
            },
            { y: this.ageData.SNS.age_25_35, label: partyName(TopParty.SNS) },
            {
              y: this.ageData.VLAST.age_25_35,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_25_35,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "35 - 45",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_35_45,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            { y: this.ageData.KDH.age_35_45, label: partyName(TopParty.KDH) },
            { y: this.ageData.LSNS.age_35_45, label: partyName(TopParty.LSNS) },
            {
              y: this.ageData.MKO_MKS.age_35_45,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_35_45,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_35_45,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_35_45,
              label: partyName(TopParty.PS_SPOLU)
            },
            { y: this.ageData.SAS.age_35_45, label: partyName(TopParty.SAS) },
            { y: this.ageData.SMER.age_35_45, label: partyName(TopParty.SMER) },
            {
              y: this.ageData.SME_RODINA.age_35_45,
              label: partyName(TopParty.SME_RODINA)
            },
            { y: this.ageData.SNS.age_35_45, label: partyName(TopParty.SNS) },
            {
              y: this.ageData.VLAST.age_35_45,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_35_45,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "45 - 55",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_45_55,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            { y: this.ageData.KDH.age_45_55, label: partyName(TopParty.KDH) },
            { y: this.ageData.LSNS.age_45_55, label: partyName(TopParty.LSNS) },
            {
              y: this.ageData.MKO_MKS.age_45_55,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_45_55,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_45_55,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_45_55,
              label: partyName(TopParty.PS_SPOLU)
            },
            { y: this.ageData.SAS.age_45_55, label: partyName(TopParty.SAS) },
            { y: this.ageData.SMER.age_45_55, label: partyName(TopParty.SMER) },
            {
              y: this.ageData.SME_RODINA.age_45_55,
              label: partyName(TopParty.SME_RODINA)
            },
            { y: this.ageData.SNS.age_45_55, label: partyName(TopParty.SNS) },
            {
              y: this.ageData.VLAST.age_45_55,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_45_55,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "55 - 65",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_55_65,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            { y: this.ageData.KDH.age_55_65, label: partyName(TopParty.KDH) },
            { y: this.ageData.LSNS.age_55_65, label: partyName(TopParty.LSNS) },
            {
              y: this.ageData.MKO_MKS.age_55_65,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_55_65,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_55_65,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_55_65,
              label: partyName(TopParty.PS_SPOLU)
            },
            { y: this.ageData.SAS.age_55_65, label: partyName(TopParty.SAS) },
            { y: this.ageData.SMER.age_55_65, label: partyName(TopParty.SMER) },
            {
              y: this.ageData.SME_RODINA.age_55_65,
              label: partyName(TopParty.SME_RODINA)
            },
            { y: this.ageData.SNS.age_55_65, label: partyName(TopParty.SNS) },
            {
              y: this.ageData.VLAST.age_55_65,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_55_65,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "> 65",
          dataPoints: [
            {
              y: this.ageData.DOBRA_VOLBA.age_above_65,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.ageData.KDH.age_above_65,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.ageData.LSNS.age_above_65,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.ageData.MKO_MKS.age_above_65,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.ageData.MOST_HID.age_above_65,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.ageData.OLANO.age_above_65,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.ageData.PS_SPOLU.age_above_65,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.ageData.SAS.age_above_65,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.ageData.SMER.age_above_65,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.ageData.SME_RODINA.age_above_65,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.ageData.SNS.age_above_65,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.ageData.VLAST.age_above_65,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.ageData.ZA_LUDI.age_above_65,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        }
      ]
    });

    const educationChart = new CanvasJS.Chart("chart-education", {
      animationEnabled: true,
      title: {
        text: "Najvyššie dosiahnuté vzdelanie kandidátov strán",
        fontSize: 28
      },
      subtitles: [
        {
          text: "Filtrovanie klikom na kategóriu",
          fontSize: 16
        }
      ],
      axisX: {
        interval: 1
      },
      axisY: {
        title: "% zo všetkých kandidátov",
        titleFontSize: 18
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeriesEducationChart
      },
      toolTip: {
        shared: false,
        content: "{label} - {name}: {y} %"
      },
      data: [
        {
          type: "bar",
          showInLegend: true,
          name: "Bc.",
          dataPoints: [
            {
              y: this.educationData.DOBRA_VOLBA.grade_1,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.educationData.KDH.grade_1,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.educationData.LSNS.grade_1,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.educationData.MKO_MKS.grade_1,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.educationData.MOST_HID.grade_1,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.educationData.OLANO.grade_1,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.educationData.PS_SPOLU.grade_1,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.educationData.SAS.grade_1,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.educationData.SMER.grade_1,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.educationData.SME_RODINA.grade_1,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.educationData.SNS.grade_1,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.educationData.VLAST.grade_1,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.educationData.ZA_LUDI.grade_1,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "2. stupeň VŠ",
          dataPoints: [
            {
              y: this.educationData.DOBRA_VOLBA.grade_2,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.educationData.KDH.grade_2,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.educationData.LSNS.grade_2,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.educationData.MKO_MKS.grade_2,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.educationData.MOST_HID.grade_2,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.educationData.OLANO.grade_2,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.educationData.PS_SPOLU.grade_2,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.educationData.SAS.grade_2,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.educationData.SMER.grade_2,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.educationData.SME_RODINA.grade_2,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.educationData.SNS.grade_2,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.educationData.VLAST.grade_2,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.educationData.ZA_LUDI.grade_2,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "3. stupeň VŠ",
          dataPoints: [
            {
              y: this.educationData.DOBRA_VOLBA.grade_3,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.educationData.KDH.grade_3,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.educationData.LSNS.grade_3,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.educationData.MKO_MKS.grade_3,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.educationData.MOST_HID.grade_3,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.educationData.OLANO.grade_3,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.educationData.PS_SPOLU.grade_3,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.educationData.SAS.grade_3,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.educationData.SMER.grade_3,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.educationData.SME_RODINA.grade_3,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.educationData.SNS.grade_3,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.educationData.VLAST.grade_3,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.educationData.ZA_LUDI.grade_3,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "Bez VŠ vzdelania",
          dataPoints: [
            {
              y: this.educationData.DOBRA_VOLBA.no_grade,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.educationData.KDH.no_grade,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.educationData.LSNS.no_grade,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.educationData.MKO_MKS.no_grade,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.educationData.MOST_HID.no_grade,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.educationData.OLANO.no_grade,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.educationData.PS_SPOLU.no_grade,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.educationData.SAS.no_grade,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.educationData.SMER.no_grade,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.educationData.SME_RODINA.no_grade,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.educationData.SNS.no_grade,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.educationData.VLAST.no_grade,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.educationData.ZA_LUDI.no_grade,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        }
      ]
    });

    const jobChart = new CanvasJS.Chart("chart-job", {
      animationEnabled: true,
      title: {
        text: "Zamestnanie kandidátov strán",
        fontSize: 28
      },
      subtitles: [
        {
          text: "Filtrovanie klikom na kategóriu",
          fontSize: 16
        }
      ],
      axisX: {
        interval: 1
      },
      axisY: {
        title: "% zo všetkých kandidátov",
        titleFontSize: 18
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeriesJobChart
      },
      toolTip: {
        shared: false,
        content: "{label} - {name}: {y} %"
      },
      data: [
        {
          type: "bar",
          showInLegend: true,
          name: "Podnikatelia",
          dataPoints: [
            {
              y: this.jobData.DOBRA_VOLBA.enterpreneur,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.jobData.KDH.enterpreneur,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.jobData.LSNS.enterpreneur,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.jobData.MKO_MKS.enterpreneur,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.jobData.MOST_HID.enterpreneur,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.jobData.OLANO.enterpreneur,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.jobData.PS_SPOLU.enterpreneur,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.jobData.SAS.enterpreneur,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.jobData.SMER.enterpreneur,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.jobData.SME_RODINA.enterpreneur,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.jobData.SNS.enterpreneur,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.jobData.VLAST.enterpreneur,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.jobData.ZA_LUDI.enterpreneur,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "Dôchodci",
          dataPoints: [
            {
              y: this.jobData.DOBRA_VOLBA.retiree,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.jobData.KDH.retiree,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.jobData.LSNS.retiree,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.jobData.MKO_MKS.retiree,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.jobData.MOST_HID.retiree,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.jobData.OLANO.retiree,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.jobData.PS_SPOLU.retiree,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.jobData.SAS.retiree,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.jobData.SMER.retiree,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.jobData.SME_RODINA.retiree,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.jobData.SNS.retiree,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.jobData.VLAST.retiree,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.jobData.ZA_LUDI.retiree,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "bar",
          showInLegend: true,
          name: "Nezamestnaní",
          dataPoints: [
            {
              y: this.jobData.DOBRA_VOLBA.unemploee,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.jobData.KDH.unemploee,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.jobData.LSNS.unemploee,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.jobData.MKO_MKS.unemploee,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.jobData.MOST_HID.unemploee,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.jobData.OLANO.unemploee,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.jobData.PS_SPOLU.unemploee,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.jobData.SAS.unemploee,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.jobData.SMER.unemploee,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.jobData.SME_RODINA.unemploee,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.jobData.SNS.unemploee,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.jobData.VLAST.unemploee,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.jobData.ZA_LUDI.unemploee,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        }
      ]
    });

    const geoChart = new CanvasJS.Chart("chart-geo", {
      animationEnabled: true,
      title: {
        text: "Trvalé bydlisko kandidátov strán",
        fontSize: 28
      },
      axisX: {
        interval: 1
      },
      axisY: {
        title: "% zo všetkých kandidátov",
        titleFontSize: 18,
        maximum: 100
      },
      legend: {
        cursor: "pointer"
        // itemclick: toggleDataSeries
      },
      toolTip: {
        shared: false,
        content: "{name}: {y} %"
      },
      data: [
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Bratislava",
          dataPoints: [
            {
              y: this.geoData.DOBRA_VOLBA.ba,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.geoData.KDH.ba,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.geoData.LSNS.ba,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.geoData.MKO_MKS.ba,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.geoData.MOST_HID.ba,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.geoData.OLANO.ba,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.geoData.PS_SPOLU.ba,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.geoData.SAS.ba,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.geoData.SMER.ba,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.geoData.SME_RODINA.ba,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.geoData.SNS.ba,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.geoData.VLAST.ba,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.geoData.ZA_LUDI.ba,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Iné",
          dataPoints: [
            {
              y: this.geoData.DOBRA_VOLBA.other,
              label: partyName(TopParty.DOBRA_VOLBA)
            },
            {
              y: this.geoData.KDH.other,
              label: partyName(TopParty.KDH)
            },
            {
              y: this.geoData.LSNS.other,
              label: partyName(TopParty.LSNS)
            },
            {
              y: this.geoData.MKO_MKS.other,
              label: partyName(TopParty.MKO_MKS)
            },
            {
              y: this.geoData.MOST_HID.other,
              label: partyName(TopParty.MOST_HID)
            },
            {
              y: this.geoData.OLANO.other,
              label: partyName(TopParty.OLANO)
            },
            {
              y: this.geoData.PS_SPOLU.other,
              label: partyName(TopParty.PS_SPOLU)
            },
            {
              y: this.geoData.SAS.other,
              label: partyName(TopParty.SAS)
            },
            {
              y: this.geoData.SMER.other,
              label: partyName(TopParty.SMER)
            },
            {
              y: this.geoData.SME_RODINA.other,
              label: partyName(TopParty.SME_RODINA)
            },
            {
              y: this.geoData.SNS.other,
              label: partyName(TopParty.SNS)
            },
            {
              y: this.geoData.VLAST.other,
              label: partyName(TopParty.VLAST)
            },
            {
              y: this.geoData.ZA_LUDI.other,
              label: partyName(TopParty.ZA_LUDI)
            }
          ]
        }
      ]
    });

    avgAgeChart.render();
    ageChart.render();
    educationChart.render();
    jobChart.render();
    geoChart.render();
  }
}
