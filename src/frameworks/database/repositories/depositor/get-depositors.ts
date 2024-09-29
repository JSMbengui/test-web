import { DepositGuaranteeFundService } from "../../../service/api";

export class GetDepositors {
  static async execute(page: string, orderBy: "des" | "asc" = "des") {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/depositantes?pagina=${page}e&order=${orderBy}`;
      
      const response = await api.getData(endPoint)
/* 
{
"genericResponse": 
  {
    "lista":[
      [
        "VALOR_REFERENCIA",
        "NOME_DEPOSITANTE"
      ],
      [
        "VALOR_REFERENCIA",
        "NOME_DEPOSITANTE"
      ]
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