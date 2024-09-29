import { DepositGuaranteeFundService } from "../../../service/api";

export class GetAccounts {
  static async execute(page: string, orderBy: "des" | "asc" = "des") {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/depositantes?pagina=${page}e&order=${orderBy}`;
      
      const response = await api.getData(endPoint)
/* 
{
"genericResponse": {
  "lista": [
    “NUMERO_DA_CONTA”,
    “NUMERO_DA_CONTA”,
    “NUMERO_DA_CONTA”,
    “…”
  ]
},
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