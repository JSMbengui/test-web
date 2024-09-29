export type AccountCharacteristicType = "SL" | "CL" | "CJ" | "ID" | "ID" | "SG" | "MT" | "RP"
export type AccountNatureType = "CO" | "CP"
export type CoinCodeType = "MN" | "ME"

type AccountGenericRequest = {
  accountNumber: string
  accountCharacteristic: AccountCharacteristicType  // anexo c
  coinCode: CoinCodeType // anexo E
  accountNature: AccountNatureType // anexo b
  inclusionExclusionCode: string //anexo f
}

export class Account {
  reference: string
  holders: string[]
  genericRequest: AccountGenericRequest

  constructor(
    reference: string,
    holders: string[],
    genericRequest: AccountGenericRequest
  ) {
    this.reference = reference;
    this.holders = holders;
    this.genericRequest = genericRequest
  }
}