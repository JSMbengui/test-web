import { DepositGuaranteeFundService } from "../../../service/api";

export class SearchAccounts {
  static async execute(account: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/find/conta?conta=${account}`;
      
      const response = await api.getData(endPoint)
/* 
{
"genericResponse": {
    "caracteristicaConta": "XX",
    "depositante": {
    "nome": "NOME_DEPOSITANTE",
    "tipoDepositante": "X",
    "referencia": "REFERENCIA"
 },
 "naturezaConta": "XX",
 "codigoInclusaoExclusao": "X",
 "estado": <Activo | Encerrado>,
 "numeroConta": "NUMERO_DA_CONTA",
 "listaOutrosTitulares": [
    {
       "nome": "NOME_DO_OUTRO_TITULAR",
       "referencia": "REFERENCIA_DO_OUTRO_TITULAR"
    },
    {
       "nome": "NOME_DO_OUTRO_TITULAR",
       "referencia": "REFERENCIA_DO_OUTRO_TITULAR"
    }
 ],
 "codigoMoeda": "XX"
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