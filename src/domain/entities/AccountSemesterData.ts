import { Depositor } from "./Depositor";
import { Account } from "./Account";
import { AccountPosition } from "./AccountPosition";

export class AccountSemesterData {
  depositor: Depositor
  account: Account
  accountPosition: AccountPosition

  constructor(
    depositor: Depositor,
    account: Account,
    accountPosition: AccountPosition
  ) {
    this.depositor = depositor
    this.account = account;
    this.accountPosition = accountPosition
  }
}