
export class SemesterGuaranteeFund {
  id: string
  accountNumber: string;
  name?: string;
  email?: string;
  primaryPhone?: string;
  alternatePhone?: string;
  address?: string;
  provinceCode?: string;
  type?: string;
  number?: string;
  accountFeature?: string;
  accountNature?: string;
  accountHolders?: string;
  depositorType?: string;
  currency?: string;
  secondaryName?: string;
  secondaryEmail?: string;
  secondaryPrimaryPhone?: string;
  secondaryAlternatePhone?: string;
  secondaryAddress?: string;
  secondaryProvinceCode?: string;
  secondaryType?: string;
  secondaryNumber?: string;
  inclusionExclusionCode?: string;
  averageAccountBalance?: number;
  accountAmount?: number;
  unavailableAmount?: number;
  grossInterest?: number;
  netInterest?: number;
  semesterStatusCollection = [];

  constructor(accountNumber: string, id?: number) {
    this.accountNumber = accountNumber;
    if (id) {
      this.id = id;
    }
  }

  getReference(): string {
    return this.accountNumber.split('-')[1];
  }

  getDepositor(): Depositor {
    return {
      phoneList: [new Phone(this.primaryPhone, true)],
      emailList: [new Email(this.email)],
      addressList: [new Address(this.address, this.provinceCode)],
      identificationList: [new Identification(this.number, this.type)],
      genericRequest: {
        name: this.name,
        reference: this.getReference(),
        depositorType: this.depositorType
      }
    };
  }

  getAccount(): Account {
    const account: Account = {
      reference: this.getReference(),
      genericRequest: {
        accountNumber: this.accountNumber,
        accountFeature: this.accountFeature,
        currencyCode: this.currency,
        accountNature: this.accountNature,
        inclusionExclusionCode: this.inclusionExclusionCode
      }
    };

    if (this.secondaryName) {
      account.otherHoldersList = [this.secondaryName];
    }

    return account;
  }

  getPosition(periodDate: Date): Position {
    const genericRequest: GenericRequest = {
      averageAccountBalance: this.averageAccountBalance,
      accountAmount: this.accountAmount,
      unavailableAmount: this.unavailableAmount,
      grossInterest: this.grossInterest,
      netInterest: this.netInterest,
      periodDate: periodDate
    };

    return {
      reference: this.getReference(),
      accountNumber: this.accountNumber,
      genericRequest: genericRequest
    };
  }
}
