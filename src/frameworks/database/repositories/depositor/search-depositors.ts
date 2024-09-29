import { DepositGuaranteeFundService } from "../../../service/api";

export class SearchDepositors {
  static async execute(reference: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/find/depositante?referencia=${reference}`;
      
      const response = await api.getData(endPoint)
/* 
{
 "genericResponse": {
    "depositante": {
      "nome": "NOME_DEPOSITANTE",
      "tipoDepositante": "TIPO_DEPOSITANTE",
      "referencia": "REFERENCIA_DEPOSITANTE"
    },
    "listaTelefones": [],
    "listaEmails": [],
    "listaEnderecos": [],
    "listaContas": [],
    "listaIdentificacoes": []
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