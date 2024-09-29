import { CoinCodeType } from "../../domain/entities/Account";

export class ValidateCoin {
  public static getDescription(type: string): CoinCodeType {
    switch (type) {
      case "Moeda Nacional":
        return "MN";
      case "Moeda Estrangeira":
        return "ME";
      default:
        return "ME";
    }
  }
}
