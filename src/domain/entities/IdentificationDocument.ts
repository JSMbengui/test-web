
export type IdentificationDocumentType = "BI" | "NIF" | "PS" | "CR" | "CF" | "PA" | "CD"

export class IdentificationDocument {
  valueNumber: string
  type: IdentificationDocumentType

  constructor(valueNumber: string, type: IdentificationDocumentType) {
    this.valueNumber = valueNumber;
    this.type = type
  }
}