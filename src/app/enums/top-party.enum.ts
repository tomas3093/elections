export enum TopParty {
  SMER,
  OLANO,
  LSNS,
  PS_SPOLU,
  ZA_LUDI,
  SME_RODINA,
  SAS,
  KDH,
  MOST_HID,
  DOBRA_VOLBA,
  SNS,
  VLAST,
  MKO_MKS
}

export function partyName(code: TopParty): string {
  switch (code) {
    case TopParty.SMER:
      return "SMER - SD";
    case TopParty.OLANO:
      return "OĽANO";
    case TopParty.LSNS:
      return "Kotlebovci - ĽSNS";
    case TopParty.PS_SPOLU:
      return "PS/Spolu";
    case TopParty.ZA_LUDI:
      return "ZA ĽUDÍ";
    case TopParty.SME_RODINA:
      return "SME RODINA";
    case TopParty.SAS:
      return "SaS";
    case TopParty.KDH:
      return "KDH";
    case TopParty.MOST_HID:
      return "MOST - HÍD";
    case TopParty.DOBRA_VOLBA:
      return "DOBRÁ VOĽBA";
    case TopParty.SNS:
      return "SNS";
    case TopParty.VLAST:
      return "VLASŤ";
    case TopParty.MKO_MKS:
      return "MKÖ - MKS";
    default:
      return "";
  }
}
