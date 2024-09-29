export class ValidateEmail {
  public static isValidEmail(email: string): boolean {
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const regex = new RegExp(pattern);
    return regex.test(email);
  }

  public static extractEmail(texto: string): string {
    const padrao = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const regex = new RegExp(padrao);
    const match = regex.exec(texto);
    return match ? match[0] : "";
  }
}
