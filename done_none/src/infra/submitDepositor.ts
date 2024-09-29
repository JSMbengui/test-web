import { DepositGuaranteeFundService } from "../service/api";

export class SubmitDepositor {
  static async execute(data: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/get/resumo/posicao/contas?dataPeriodo=${data}`;
      console.log(endPoint)
      const response = await api.getData(endPoint)
      console.log(response.statusText)
      return response.data
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}

return webResource
  .path("insert/complete/depositante")
  .type(javax.ws.rs.core.MediaType.APPLICATION_JSON)
  .post(responseType, requestEntity);