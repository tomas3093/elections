import { Injectable } from '@angular/core';

import { TopParty } from '../enums/top-party.enum';
import { PartiesAge } from '../interfaces/parties-age';
import { PartiesEducation } from '../interfaces/parties-education';
import { PartiesGeo } from '../interfaces/parties-geo';
import { PartiesJob } from '../interfaces/parties-job';
import { PartyAgeData } from '../interfaces/party-age-data';
import { PartyEducationData } from '../interfaces/party-education-data';
import { PartyGeoData } from '../interfaces/party-geo-data';
import { PartyJobData } from '../interfaces/party-job-data';
import { PartyListItem } from '../interfaces/party-list-item';
import { TwoDigitPercentagePipe } from '../pipes/two-digit-percentage.pipe';

@Injectable({
  providedIn: "root"
})
export class DataService {
  data = {
    cislo_listiny: [
      1,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      2,
      20,
      21,
      22,
      23,
      24,
      25,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    logo: [
      "1.jpeg",
      "10.png",
      "11.jpeg",
      "12.png",
      "13.png",
      "14.png",
      "15.jpeg",
      "16.jpeg",
      "17.jpeg",
      "18.png",
      "19.png",
      "2.png",
      "20.png",
      "21.jpeg",
      "22.png",
      "23.jpeg",
      "24.png",
      "25.png",
      "3.jpeg",
      "4.jpeg",
      "5.png",
      "6.png",
      "7.jpeg",
      "8.png",
      "9.jpeg"
    ],
    nazov_strany: [
      "Slovenská ľudová strana Andreja Hlinku",
      "Demokratická strana",
      "OBYČAJNÍ ĽUDIA a nezávislé osobnosti (OĽANO), NOVA, Kresťanská únia (KÚ), ZMENA ZDOLA",
      "Koalícia Progresívne Slovensko a SPOLU – občianska demokracia",
      "STAROSTOVIA A NEZÁVISLÍ KANDIDÁTI",
      "99 % - občiansky hlas",
      "Kresťanskodemokratické hnutie",
      "Slovenská liga",
      "VLASŤ",
      "MOST - HÍD",
      "SMER - sociálna demokracia",
      "DOBRÁ VOĽBA",
      "SOLIDARITA - Hnutie pracujúcej chudoby",
      "HLAS ĽUDU",
      "Magyar Közösségi Összefogás - Maďarská komunitná spolupatričnosť",
      "Práca slovenského národa",
      "Kotlebovci - Ľudová strana Naše Slovensko",
      "Socialisti.sk",
      "Sloboda a Solidarita",
      "SME RODINA",
      "Slovenské Hnutie Obrody",
      "ZA ĽUDÍ",
      "MÁME TOHO DOSŤ !",
      "Hlas pravice",
      "Slovenská národná strana"
    ],
    kandidati: [
      39,
      150,
      150,
      150,
      95,
      33,
      150,
      74,
      149,
      150,
      150,
      150,
      80,
      17,
      150,
      13,
      150,
      150,
      149,
      150,
      25,
      150,
      71,
      41,
      150
    ],
    vs_1_stupen: [
      0,
      6,
      6,
      3,
      1,
      1,
      5,
      3,
      7,
      4,
      5,
      6,
      2,
      0,
      5,
      0,
      11,
      2,
      6,
      15,
      1,
      9,
      4,
      1,
      5
    ],
    vs_2_stupen: [
      15,
      77,
      66,
      80,
      20,
      13,
      67,
      24,
      58,
      72,
      81,
      74,
      12,
      8,
      67,
      8,
      56,
      56,
      79,
      56,
      7,
      79,
      12,
      23,
      74
    ],
    vs_3_stupen: [
      3,
      17,
      38,
      38,
      7,
      6,
      51,
      10,
      23,
      27,
      54,
      29,
      5,
      2,
      29,
      1,
      20,
      16,
      26,
      23,
      0,
      34,
      3,
      5,
      42
    ],
    vek_pod_25: [
      1,
      1,
      6,
      3,
      5,
      0,
      3,
      0,
      6,
      2,
      1,
      3,
      2,
      1,
      3,
      0,
      5,
      4,
      7,
      4,
      1,
      4,
      4,
      3,
      1
    ],
    vek_25_35: [
      2,
      20,
      14,
      37,
      27,
      3,
      18,
      7,
      27,
      17,
      11,
      31,
      9,
      1,
      34,
      1,
      27,
      30,
      28,
      28,
      6,
      34,
      11,
      6,
      15
    ],
    vek_35_45: [
      2,
      40,
      48,
      60,
      32,
      8,
      31,
      7,
      31,
      31,
      34,
      53,
      18,
      6,
      43,
      2,
      51,
      43,
      50,
      64,
      6,
      50,
      24,
      4,
      32
    ],
    vek_45_55: [
      9,
      38,
      46,
      36,
      22,
      7,
      54,
      20,
      37,
      61,
      41,
      31,
      22,
      1,
      50,
      3,
      34,
      34,
      40,
      41,
      7,
      39,
      22,
      21,
      58
    ],
    vek_55_65: [
      17,
      33,
      24,
      12,
      9,
      7,
      37,
      20,
      35,
      37,
      51,
      22,
      13,
      6,
      18,
      2,
      18,
      23,
      19,
      12,
      2,
      20,
      10,
      4,
      36
    ],
    vek_nad_65: [
      8,
      18,
      12,
      2,
      0,
      8,
      7,
      20,
      13,
      2,
      12,
      10,
      16,
      2,
      2,
      5,
      15,
      16,
      5,
      1,
      3,
      3,
      0,
      3,
      8
    ],
    vek_priem: [
      55,
      48,
      46,
      40,
      40,
      52,
      48,
      54,
      46,
      47,
      50,
      44,
      50,
      48,
      43,
      57,
      44,
      45,
      42,
      41,
      45,
      42,
      43,
      45,
      47
    ],
    dochodci: [
      3,
      10,
      2,
      0,
      1,
      6,
      2,
      16,
      12,
      6,
      1,
      7,
      17,
      1,
      1,
      6,
      8,
      12,
      3,
      2,
      3,
      3,
      2,
      2,
      2
    ],
    zivnostnici: [
      2,
      27,
      16,
      17,
      22,
      4,
      6,
      10,
      38,
      11,
      4,
      11,
      8,
      2,
      18,
      3,
      33,
      27,
      28,
      29,
      7,
      12,
      12,
      3,
      12
    ],
    nezamestnani: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      4,
      1,
      0,
      0,
      3,
      0,
      1,
      0,
      4,
      3,
      1,
      0,
      0,
      0,
      4,
      0,
      0
    ],
    ba: [
      3,
      35,
      32,
      50,
      12,
      14,
      19,
      26,
      26,
      8,
      23,
      20,
      3,
      9,
      3,
      1,
      18,
      12,
      39,
      24,
      0,
      27,
      3,
      6,
      18
    ],
    ke: [
      1,
      11,
      6,
      5,
      1,
      2,
      6,
      4,
      13,
      9,
      7,
      10,
      2,
      0,
      3,
      0,
      5,
      9,
      1,
      7,
      1,
      9,
      9,
      0,
      1
    ],
    po: [
      0,
      0,
      3,
      3,
      0,
      0,
      2,
      0,
      1,
      3,
      2,
      1,
      0,
      0,
      0,
      0,
      0,
      9,
      3,
      5,
      0,
      1,
      1,
      4,
      3
    ],
    nr: [
      1,
      4,
      0,
      1,
      0,
      0,
      2,
      1,
      4,
      0,
      5,
      0,
      1,
      0,
      2,
      0,
      4,
      5,
      2,
      4,
      2,
      8,
      0,
      0,
      4
    ],
    za: [
      1,
      2,
      2,
      2,
      0,
      0,
      1,
      0,
      1,
      0,
      2,
      1,
      1,
      0,
      0,
      0,
      3,
      9,
      2,
      4,
      0,
      2,
      0,
      0,
      1
    ],
    bb: [
      13,
      10,
      1,
      6,
      0,
      0,
      1,
      0,
      2,
      0,
      7,
      1,
      5,
      1,
      0,
      0,
      6,
      4,
      4,
      3,
      0,
      1,
      1,
      0,
      2
    ],
    tt: [
      0,
      2,
      6,
      4,
      0,
      1,
      3,
      0,
      1,
      0,
      4,
      1,
      0,
      1,
      0,
      0,
      3,
      1,
      3,
      4,
      0,
      2,
      0,
      0,
      0
    ],
    mt: [
      0,
      0,
      2,
      4,
      0,
      0,
      3,
      1,
      2,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      3,
      3,
      1,
      1,
      1,
      0,
      3,
      4
    ],
    tr: [
      0,
      6,
      2,
      2,
      2,
      0,
      2,
      6,
      2,
      0,
      3,
      2,
      0,
      0,
      0,
      3,
      1,
      2,
      3,
      1,
      0,
      3,
      0,
      0,
      1
    ],
    pp: [
      1,
      0,
      1,
      1,
      0,
      0,
      4,
      0,
      2,
      0,
      1,
      2,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      3,
      0,
      0,
      2
    ],
    pn: [
      0,
      0,
      4,
      2,
      0,
      0,
      1,
      0,
      2,
      0,
      2,
      3,
      0,
      0,
      0,
      0,
      3,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      0
    ]
  };

  constructor(private percentagePipe: TwoDigitPercentagePipe) {}

  private getDataIndex(partyId: number): number {
    return this.data.cislo_listiny.indexOf(partyId);
  }

  private getPartyId(code: TopParty): number {
    switch (code) {
      case TopParty.SMER:
        return 19;
      case TopParty.OLANO:
        return 11;
      case TopParty.LSNS:
        return 24;
      case TopParty.PS_SPOLU:
        return 12;
      case TopParty.ZA_LUDI:
        return 6;
      case TopParty.SME_RODINA:
        return 4;
      case TopParty.SAS:
        return 3;
      case TopParty.KDH:
        return 15;
      case TopParty.MOST_HID:
        return 18;
      case TopParty.DOBRA_VOLBA:
        return 2;
      case TopParty.SNS:
        return 9;
      case TopParty.VLAST:
        return 17;
      case TopParty.MKO_MKS:
        return 22;
      default:
        return -1;
    }
  }

  getPartyName(partyId: number): string {
    return this.data.nazov_strany[this.getDataIndex(partyId)];
  }

  getPartyLogo(partyId: number): string {
    return this.data.logo[this.getDataIndex(partyId)];
  }

  getAllParties(): PartyListItem[] {
    const partyList: PartyListItem[] = [];

    for (let i = 0; i < this.data.cislo_listiny.length; i++) {
      const item: PartyListItem = {
        id: this.data.cislo_listiny[i],
        name: this.data.nazov_strany[i],
        logo: this.data.logo[i],
        candidates: this.data.kandidati[i]
      };

      partyList.push(item);
    }

    return partyList.sort((a, b) => a.id - b.id);
  }

  getPartyListItem(partyId: number): PartyListItem {
    const item: PartyListItem = {
      id: this.data.cislo_listiny[this.getDataIndex(partyId)],
      name: this.data.nazov_strany[this.getDataIndex(partyId)],
      logo: this.data.logo[this.getDataIndex(partyId)],
      candidates: this.data.kandidati[this.getDataIndex(partyId)]
    };

    return item;
  }

  getAgeData(partyId: number): PartyAgeData {
    const item: PartyAgeData = {
      age_below_25: this.percentagePipe.transform(
        this.data.vek_pod_25[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_25_35: this.percentagePipe.transform(
        this.data.vek_25_35[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_35_45: this.percentagePipe.transform(
        this.data.vek_35_45[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_45_55: this.percentagePipe.transform(
        this.data.vek_45_55[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_55_65: this.percentagePipe.transform(
        this.data.vek_55_65[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_above_65: this.percentagePipe.transform(
        this.data.vek_nad_65[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      age_avg: this.data.vek_priem[this.getDataIndex(partyId)]
    };

    return item;
  }

  getEducationData(partyId: number): PartyEducationData {
    const item: PartyEducationData = {
      grade_1: this.percentagePipe.transform(
        this.data.vs_1_stupen[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      grade_2: this.percentagePipe.transform(
        this.data.vs_2_stupen[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      grade_3: this.percentagePipe.transform(
        this.data.vs_3_stupen[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      no_grade: this.percentagePipe.transform(
        this.data.kandidati[this.getDataIndex(partyId)] -
          this.data.vs_1_stupen[this.getDataIndex(partyId)] -
          this.data.vs_2_stupen[this.getDataIndex(partyId)] -
          this.data.vs_3_stupen[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      )
    };

    return item;
  }

  getGeoData(partyId: number): PartyGeoData {
    const item: PartyGeoData = {
      ba: this.percentagePipe.transform(
        this.data.ba[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      // ke: this.data.ke[this.getDataIndex(partyId)],
      // po: this.data.po[this.getDataIndex(partyId)],
      // nr: this.data.nr[this.getDataIndex(partyId)],
      // za: this.data.za[this.getDataIndex(partyId)],
      // bb: this.data.bb[this.getDataIndex(partyId)],
      // tt: this.data.tt[this.getDataIndex(partyId)],
      // mt: this.data.mt[this.getDataIndex(partyId)],
      // tr: this.data.tr[this.getDataIndex(partyId)],
      // pp: this.data.pp[this.getDataIndex(partyId)],
      // pn: this.data.pn[this.getDataIndex(partyId)],
      other: this.percentagePipe.transform(
        this.data.kandidati[this.getDataIndex(partyId)] -
          this.data.ba[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      )
      // this.data.ke[this.getDataIndex(partyId)] -
      // this.data.po[this.getDataIndex(partyId)] -
      // this.data.nr[this.getDataIndex(partyId)] -
      // this.data.za[this.getDataIndex(partyId)] -
      // this.data.bb[this.getDataIndex(partyId)] -
      // this.data.tt[this.getDataIndex(partyId)] -
      // this.data.mt[this.getDataIndex(partyId)] -
      // this.data.tr[this.getDataIndex(partyId)] -
      // this.data.pp[this.getDataIndex(partyId)] -
      // this.data.pn[this.getDataIndex(partyId)]
    };

    return item;
  }

  getJobData(partyId: number): PartyJobData {
    const item: PartyJobData = {
      retiree: this.percentagePipe.transform(
        this.data.dochodci[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      enterpreneur: this.percentagePipe.transform(
        this.data.zivnostnici[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      unemploee: this.percentagePipe.transform(
        this.data.nezamestnani[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      ),
      other: this.percentagePipe.transform(
        this.data.kandidati[this.getDataIndex(partyId)] -
          this.data.dochodci[this.getDataIndex(partyId)] -
          this.data.zivnostnici[this.getDataIndex(partyId)] -
          this.data.nezamestnani[this.getDataIndex(partyId)],
        this.data.kandidati[this.getDataIndex(partyId)]
      )
    };

    return item;
  }

  getPartiesAgeData(): PartiesAge {
    const item: PartiesAge = {
      DOBRA_VOLBA: this.getAgeData(this.getPartyId(TopParty.DOBRA_VOLBA)),
      KDH: this.getAgeData(this.getPartyId(TopParty.KDH)),
      LSNS: this.getAgeData(this.getPartyId(TopParty.LSNS)),
      MKO_MKS: this.getAgeData(this.getPartyId(TopParty.MKO_MKS)),
      MOST_HID: this.getAgeData(this.getPartyId(TopParty.MOST_HID)),
      OLANO: this.getAgeData(this.getPartyId(TopParty.OLANO)),
      PS_SPOLU: this.getAgeData(this.getPartyId(TopParty.PS_SPOLU)),
      SAS: this.getAgeData(this.getPartyId(TopParty.SAS)),
      SMER: this.getAgeData(this.getPartyId(TopParty.SMER)),
      SME_RODINA: this.getAgeData(this.getPartyId(TopParty.SME_RODINA)),
      SNS: this.getAgeData(this.getPartyId(TopParty.SNS)),
      VLAST: this.getAgeData(this.getPartyId(TopParty.VLAST)),
      ZA_LUDI: this.getAgeData(this.getPartyId(TopParty.ZA_LUDI))
    };

    return item;
  }

  getPartiesJobData(): PartiesJob {
    const item: PartiesJob = {
      DOBRA_VOLBA: this.getJobData(this.getPartyId(TopParty.DOBRA_VOLBA)),
      KDH: this.getJobData(this.getPartyId(TopParty.KDH)),
      LSNS: this.getJobData(this.getPartyId(TopParty.LSNS)),
      MKO_MKS: this.getJobData(this.getPartyId(TopParty.MKO_MKS)),
      MOST_HID: this.getJobData(this.getPartyId(TopParty.MOST_HID)),
      OLANO: this.getJobData(this.getPartyId(TopParty.OLANO)),
      PS_SPOLU: this.getJobData(this.getPartyId(TopParty.PS_SPOLU)),
      SAS: this.getJobData(this.getPartyId(TopParty.SAS)),
      SMER: this.getJobData(this.getPartyId(TopParty.SMER)),
      SME_RODINA: this.getJobData(this.getPartyId(TopParty.SME_RODINA)),
      SNS: this.getJobData(this.getPartyId(TopParty.SNS)),
      VLAST: this.getJobData(this.getPartyId(TopParty.VLAST)),
      ZA_LUDI: this.getJobData(this.getPartyId(TopParty.ZA_LUDI))
    };

    return item;
  }

  getPartiesEducationData(): PartiesEducation {
    const item: PartiesEducation = {
      DOBRA_VOLBA: this.getEducationData(this.getPartyId(TopParty.DOBRA_VOLBA)),
      KDH: this.getEducationData(this.getPartyId(TopParty.KDH)),
      LSNS: this.getEducationData(this.getPartyId(TopParty.LSNS)),
      MKO_MKS: this.getEducationData(this.getPartyId(TopParty.MKO_MKS)),
      MOST_HID: this.getEducationData(this.getPartyId(TopParty.MOST_HID)),
      OLANO: this.getEducationData(this.getPartyId(TopParty.OLANO)),
      PS_SPOLU: this.getEducationData(this.getPartyId(TopParty.PS_SPOLU)),
      SAS: this.getEducationData(this.getPartyId(TopParty.SAS)),
      SMER: this.getEducationData(this.getPartyId(TopParty.SMER)),
      SME_RODINA: this.getEducationData(this.getPartyId(TopParty.SME_RODINA)),
      SNS: this.getEducationData(this.getPartyId(TopParty.SNS)),
      VLAST: this.getEducationData(this.getPartyId(TopParty.VLAST)),
      ZA_LUDI: this.getEducationData(this.getPartyId(TopParty.ZA_LUDI))
    };

    return item;
  }

  getPartiesGeoData(): PartiesGeo {
    const item: PartiesGeo = {
      DOBRA_VOLBA: this.getGeoData(this.getPartyId(TopParty.DOBRA_VOLBA)),
      KDH: this.getGeoData(this.getPartyId(TopParty.KDH)),
      LSNS: this.getGeoData(this.getPartyId(TopParty.LSNS)),
      MKO_MKS: this.getGeoData(this.getPartyId(TopParty.MKO_MKS)),
      MOST_HID: this.getGeoData(this.getPartyId(TopParty.MOST_HID)),
      OLANO: this.getGeoData(this.getPartyId(TopParty.OLANO)),
      PS_SPOLU: this.getGeoData(this.getPartyId(TopParty.PS_SPOLU)),
      SAS: this.getGeoData(this.getPartyId(TopParty.SAS)),
      SMER: this.getGeoData(this.getPartyId(TopParty.SMER)),
      SME_RODINA: this.getGeoData(this.getPartyId(TopParty.SME_RODINA)),
      SNS: this.getGeoData(this.getPartyId(TopParty.SNS)),
      VLAST: this.getGeoData(this.getPartyId(TopParty.VLAST)),
      ZA_LUDI: this.getGeoData(this.getPartyId(TopParty.ZA_LUDI))
    };

    return item;
  }
}
