export class ValidatePhone {
  // Verifica se o número é um número de telefone angolano válido
  public static isAngolanPhoneNumber(numero: string): boolean {
    const pattern = /^\+244\d{9}$/;
    const regex = new RegExp(pattern);
    return regex.test(numero);
  }

  // Extrai o número de telefone de um texto
  public static extractNumber(texto: string): string {
    if (!ValidatePhone.isAngolanPhoneNumber(texto)) return ""
    
    const pattern = /(\+244)?9\d{8}/;
    const regex = new RegExp(pattern);
    const match = regex.exec(texto);
    return match ? match[0] : "";
  }
}
