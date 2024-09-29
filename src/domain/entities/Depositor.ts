import { Phone } from "./Phone";
import { Email } from "./Email"
import { Address } from "./Address"
import { IdentificationDocument } from "./IdentificationDocument";
import { GenericRequest } from "./GenericRequest";

export class Depositor {
  phoneNumbers: Phone[]
  emails: Email[]
  addresses: Address[]
  identifications: IdentificationDocument[]
  genericRequest: GenericRequest

  constructor(
    phoneNumbers: Phone[],
    emails: Email[],
    addresses: Address[],
    identifications: IdentificationDocument[],
    genericRequest: GenericRequest
  ) {
    this.phoneNumbers = phoneNumbers
    this.addresses = addresses
    this.identifications = identifications;
    this.emails = emails
    this.genericRequest = genericRequest
  }
}