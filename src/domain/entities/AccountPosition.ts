type AccountPositionGenericRequest = {
  averageAccountBalance: number
  accountBalance: number
  unavailableBalance: number
  grossInterest: number
  netInterest: number
  periodDate: Date
}

export class AccountPosition {
  reference: string
  accountNumber: string
  genericRequest: AccountPositionGenericRequest

  constructor(
    reference: string,
    accountNumber: string,
    genericRequest: AccountPositionGenericRequest
  ) {
    this.reference = reference
    this.accountNumber = accountNumber;
    this.genericRequest = genericRequest
  }

}