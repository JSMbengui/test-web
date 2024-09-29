import { DepositGuaranteeFundService } from "../../../service/api";

export class SearchAccountPositionByPeriod {
  static async execute(periodDate: string, accountNumber) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/find/posicao/conta?dataPeriodo=${periodDate}&conta=${accountNumber}`;
      
      const response = await api.getData(endPoint)
/* 
{
genericResponse": 
{
"depositante": 
{
 "nome": "NOME_DEPOSITANTE",
 "tipoDepositante": "X",
 "referencia": "REFERENCIA"
 },
 "posicaoConta": 
{
 "saldoMedioConta": VALOR_SALDO_MEDIO,
 "montanteConta": VALOR_MONTANTE_CONTA,
 "dataPeriodo": "DATA_PERIO",
 "montanteIndisponivel": VALOR_MONTANTE_INDISPONIVEL,
 "jurosLiquido": VALOR_JUROS_LIQUIDO,
 "jurosBruto": VALOR_JUROS_BRUTO
},
"conta": 
{
 "caracteristicaConta": "CARACTERISTICA_CONTA",
 "naturezaConta": "NATUREZA_CONTA",
 "codigoInclusaoExclusao": "XX",
 "numeroConta": "NUMERO_CONTA",
 "listaOutrosTitulares": [LISTA_OUTROS_TITULARES],
 "codigoMoeda": "XX"

 }
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