import { DepositGuaranteeFundService } from "../../../service/api";
import { PositionPayload } from "../../../../types/position";
import { AccountPosition } from "../../../../domain/entities/AccountPosition";

export class SubmitAccountPosition {
  static async execute(data: AccountPosition) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/insert/posicao`;

      PositionPayload.genericRequest = {
        dataPeriodo: data.genericRequest.periodDate.toString(),
        jurosBruto: data.genericRequest.grossInterest,
        jurosLiquido: data.genericRequest.netInterest,
        montanteConta: data.genericRequest.accountBalance,
        montanteIndisponivel: data.genericRequest.unavailableBalance,
        saldoMedioConta: data.genericRequest.averageAccountBalance
      }
      PositionPayload.numeroConta = data.accountNumber
      PositionPayload.referencia = data.reference

      const account = PositionPayload;

      const response = await api.createData(endPoint, account)
      console.log(response.statusText)
      return response
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}
