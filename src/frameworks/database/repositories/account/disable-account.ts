import { DepositGuaranteeFundService } from "../../../service/api";

export class DisableAccount {
  static async execute(accountNumber: string) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/inactivate/conta?conta=${accountNumber}`;

      const response = await api.getData(endPoint)

      /*
      {
        "message": "EDITED",
        "success": true
      }
      */

      return response.data
    } catch (error) {
      throw error
    }
  }
}
