import { DepositGuaranteeFundService } from "../../service/api";

export class GetResumeSubmission {
  static async execute(data: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/get/resumo/posicao/contas?dataPeriodo=${data}`;
      console.log(endPoint)
      const response = await api.getData(endPoint)
      console.log("STATUS: ", response.status)
      return response.data
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}