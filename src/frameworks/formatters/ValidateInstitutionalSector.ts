export class ValidateInstitutionalSector {
  public static getDescription(type: string): string {
    switch (type) {
      case "Particular":
        return "P";
      case "Empresas":
        return "E";
      default:
        return "E";
    }
  }
}
