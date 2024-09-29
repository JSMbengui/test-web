import { AccountPosition } from "./domain/entities/AccountPosition";
import { AccountSemesterData } from "./domain/entities/AccountSemesterData";
import { SubmitAccountPosition } from "./frameworks/database/repositories/position/submit-account-position";
import { SubmitAccount } from "./frameworks/database/repositories/account/submit-account";
import { SubmitDepositor } from "./frameworks/database/repositories/depositor/submit-depositor";
import { Account } from "./domain/entities/Account";
import { Depositor } from "./domain/entities/Depositor";

export async function submitDataToDepositGuaranteeFund(data: AccountSemesterData) {
  try {
    const accountPosition: AccountPosition = {
      reference: data.accountPosition.reference,
      accountNumber: data.accountPosition.accountNumber,
      genericRequest: data.accountPosition.genericRequest
    }

    const response = await SubmitAccountPosition.execute(accountPosition)

    if (!response.data.success) {
      const errorMessage = ""
      // account not exist
      if (response.data.message === "Erro: Conta inexistente") {
        const depositor: Depositor = {
          addresses: data.depositor.addresses,
          emails: data.depositor.emails,
          genericRequest: {
            name: data.depositor.genericRequest.name,
            reference: data.depositor.genericRequest.reference,
            typeDepositor: data.depositor.genericRequest.typeDepositor
          },
          identifications: data.depositor.identifications,
          phoneNumbers: data.depositor.phoneNumbers
        }
        const responseDepositor = await SubmitDepositor.execute(depositor)

        if (responseDepositor.data.success == false) {
          // submit log of not created
        }

        const account: Account = {
          genericRequest: data.account.genericRequest,
          holders: data.account.holders,
          reference: data.account.reference
        }
        const responseAccount = await SubmitAccount.execute(account)
        if (responseAccount.data.success == false) {
          // submit log of not created
        }

        const responsePosition = await SubmitAccountPosition.execute(accountPosition)
        console.log(responsePosition)
      }

      // depositor not exist
      if (response.data.message === "Erro: Depositante inexistente") {

      }
    }
  } catch (err) {
    console.log("temos erro aqui")
  }
}