import { AccountNatureType } from "../../domain/entities/Account";

export abstract class ValidateAccountNature {
  private static readonly documentTypeCodes: Map<string, string> = new Map<string, string>([
    ["Deposito Ordem (Clientes)", "CO"],
    ["Deposito Ordem(Empregado)", "CO"],
    ["Deposito a Ordem (Via ME)", "CO"],
    ["Ministerio Financas OGE (D.O)", "CO"],
    ["Dep a Pzo 181/360 Dias", "CP"],
    ["Dep a Pzo 91 /180 Dias", "CP"],
    ["Dep a Pzo > 360 Dias", "CP"],
    ["Dep a Pzo 30 / 90 Dias", "CP"]
  ]);

  public static getDescription(type: string): AccountNatureType {
    const trimmedDescription = type.trim();

    const code = this.documentTypeCodes.get(trimmedDescription);
    return code !== undefined ? code as AccountNatureType : "CO";
  }
}
