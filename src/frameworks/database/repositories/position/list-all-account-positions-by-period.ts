import { DepositGuaranteeFundService } from "../../../service/api";

export class ListAllAccountPositionByPeriod {
  static async execute(periodDate: string, page: string, orderBy: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/list/posicao/conta?dataPeriodo=${periodDate}&pagina=${page}&order=${orderBy}`;
      
      const response = await api.getData(endPoint)
/* 

{
  "genericResponse": {
    "lista": 
    [
      {
       "saldoMedioConta": VALOR_SALDO_MEDIO,
       "montanteConta": VALOR_MONTANTE_CONTA,
       "dataPeriodo": "DATA_PERIODO",
       "montanteIndisponivel": MONTANTE_INDISPONIVEL,
       "numeroConta": "NUMERO_CONTA",
       "jurosLiquido": JUROS_LIQUIDO,
       "jurosBruto": JUROS_BRUTO
      }
    ]
  },
  "success": tru
*/
      return response.data
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}
