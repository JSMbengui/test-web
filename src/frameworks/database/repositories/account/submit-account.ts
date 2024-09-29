import { DepositGuaranteeFundService } from "../../../service/api";
import { AccountPayload } from "../../../../types/account";
import { Account } from "../../../../domain/entities/Account";

export class SubmitAccount {
  static async execute(data: Account) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/insert/complete/conta`;

      AccountPayload.genericRequest = {
        caracteristicaConta: data.genericRequest.accountCharacteristic,
        codigoInclusaoExclusao: data.genericRequest.inclusionExclusionCode,
        codigoMoeda: data.genericRequest.coinCode,
        naturezaConta: data.genericRequest.accountNature,
        numeroConta: data.genericRequest.accountNumber,
      }
      AccountPayload.listaOutrosTitulares = data.holders
      AccountPayload.referencia = data.reference

      const account = AccountPayload;

      const response = await api.createData(endPoint, account)

      return response
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}
