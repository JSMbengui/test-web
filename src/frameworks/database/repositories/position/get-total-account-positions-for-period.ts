import { DepositGuaranteeFundService } from "../../../service/api";

export class GetTotalAccountPositionForPeriod {
  static async execute(periodDate: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/total/posicao/conta?dataPeriodo=${periodDate}`;
      
      const response = await api.getData(endPoint)
/* 

{
  "genericResponse": {"total": NUMERO_TOTAL_POSICOES_CONTAS_REPORTADAS},
  "success": true
}

*/
      return response.data
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}
