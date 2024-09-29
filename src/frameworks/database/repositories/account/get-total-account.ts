import { DepositGuaranteeFundService } from "../../../service/api";

export class GetTotalAccount {
  static async execute() {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/total/contas`;
      
      const response = await api.getData(endPoint)
/* 
{
"genericResponse": {"total": NUMERO_TOTAL_CONTAS_REPORTADAS},
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