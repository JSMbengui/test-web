export class ValidateTypeDocument {
  private static documentCodes: { [key: string]: string } = {
    "BILHETE DE IDENTIDADE": "BI",
    "NÚMERO DE IDETIFICAÇÃO FISCAL": "NIF",
    "PASSAPORTE": "PA",
    "CARTÃO DE RESIDENTE": "CR",
    "CARTÃO DE REFUGIADO": "CF",
    "PASSAPORTE DE ASILO": "PA",
    "CEDULA DE NASCIMENTO": "CD",
    "CÉDULA": "CD",
    "CARTÃO DE ELEITOR": "CD",
    "BILHETE MILITAR": "CD"
  };

  public static getDescription(documentType: string): string {
    // Remove espaços em branco e converte para maiúsculas
    documentType = documentType.trim().toUpperCase();

    // Obtém o código correspondente ao tipo de documento
    return this.documentCodes[documentType] || "";
  }
}
