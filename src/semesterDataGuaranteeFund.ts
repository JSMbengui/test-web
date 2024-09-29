export class SemesterGuaranteeFund {
  id: string = ""
  name: string = ""
  email: string = ""
  primaryPhoneNumber: string = ""
  secondaryPhoneNumber: string = ""
  address: string = ""
  province: string = ""
  documentationType: string = "" // Bilhete ou 
  documentationIdentificationNumber: string = ""
  accountNumber: string = ""
  accountCharacteristic: string = ""
  accountTypeDepositor: string = "" // Deposito Order, Deposito Outro
  holders: string = ""
  accountInstitutionType: string = "" // Empresa ou Particular
  coinType: string = ""
  name2: string = ""
  email2: string = ""
  phoneNumber2: string = ""
  alternativePhoneNumber2: string = ""
  address2: string = ""
  province2: string = ""
  documentationIdentificationNumber2: string = ""
  inclusionOrExclusion: string = ""
  averageAmountBalance: number = 0
  amountBalance: number = 0
  unavailableBalance: number = 0
  grossInterest: number = 0
  netInterest: number = 0
  documentationType2: string = ""

  constructor(accountNumber: string, id?: string) {
    this.accountNumber = accountNumber;
    if (id) {
      this.id = id;
    }
  }
}
