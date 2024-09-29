import { AccountCharacteristicType } from "../../domain/entities/Account";

export abstract class ValidateAccountCharacteristics {
  private static readonly typeDocuments: Map<string, string> = new Map<string, string>([
    ["SOLIDÁRIA", "SL"],
    ["COLECTIVA", "CL"],
    ["CONJUNTA", "CJ"],
    ["INDIVIDUAL", "ID"],
    ["SINGULAR", "SG"],
    ["MISTA", "MT"],
    ["REPRESENTADA", "RP"],
  ]);

  public static getDescription(type: string): AccountCharacteristicType {
    const typeDescription = type.trim();

    const code = this.typeDocuments.get(typeDescription);
    return code !== undefined ? code as AccountCharacteristicType : "ID";
  }
}
