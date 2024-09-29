export type TypeDepositor = "E" | "P"

export class GenericRequest {
  name: string
  reference: string
  typeDepositor: TypeDepositor

  constructor(name: string, reference: string, typeDepositor: TypeDepositor) {
    this.name = name;
    this.reference = reference;
    this.typeDepositor = typeDepositor
  }
}