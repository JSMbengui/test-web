export abstract class ValidateInclusionExclusion {
  private static readonly entityTypeCodes: Map<string, string> = new Map<string, string>([
    ["Particulares", "P"],
    ["Empregados", "P"],
    ["Empresa mista", "E"],
    ["Empresa publica", "E"],
    ["Empresa Privada", "E"],
    ["Administração Púb.Central", "E"],
    ["Administração Púb. Local", "E"]
  ]);

  public static getDescription(type: string): string {
    const trimmedType = type.trim();
    
    // Verifica se o tipo está no dicionário
    const code = this.entityTypeCodes.get(trimmedType);
    if (code) {
      return code;
    } 
    // Verifica se o tipo começa com "Banco"
    else if (trimmedType.startsWith("Banco")) {
      return "E";
    }

    // Retorna "E" como valor padrão para casos não especificados
    return "E";
  }
}
