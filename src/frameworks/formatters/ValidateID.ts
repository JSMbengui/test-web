export class ValidateID {
  public static isAngolanIDNumber(number: string): boolean {
    const cleanedNumber = number.replace(/Nº/g, "").trim();

    const pattern = /^\d{9}[A-Z]{2}\d{3}$/;
    const regex = new RegExp(pattern);

    return regex.test(cleanedNumber);
  }

  public static extractIDNumber(texto: string): string {
    const cleanedText = texto.replace(/Nº/g, "").trim();

    const pattern = /^\d{9}[A-Z]{2}\d{3}$/;
    const regex = new RegExp(pattern);

    const match = regex.exec(cleanedText);
    return match ? match[0] : "";
  }
}
