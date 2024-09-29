import { DepositGuaranteeFundService } from "../../../service/api";

export class GetTotalDepositor {
  static async execute() {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/total/depositantes`;
      
      const response = await api.getData(endPoint)
/* 
{
"genericResponse": {"total": NUMERO_TOTAL_DEPOSITANTES_REPORTADOS},
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