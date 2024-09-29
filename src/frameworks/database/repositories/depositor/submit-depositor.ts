import { DepositGuaranteeFundService } from "../../../service/api";
import { DepositorPayload } from "../../../../types/depositor";
import { Depositor } from "../../../../domain/entities/Depositor";

export class SubmitDepositor {
  static async execute(data: Depositor) {
    try {
      const api = new DepositGuaranteeFundService()

      const endPoint: string = `/insert/complete/depositante`;

      DepositorPayload.listaEmails = data.emails.map(email => ({
        email: email.value
      }))
      DepositorPayload.listaTelefones = data.phoneNumbers.map(phoneNumber => ({
        telefone: phoneNumber.value,
        principal: phoneNumber.isMain
      }))
      DepositorPayload.genericRequest = {
        nome: data.genericRequest.name,
        referencia: data.genericRequest.reference,
        tipoDepositante: data.genericRequest.typeDepositor,
      }
      DepositorPayload.listaEnderecos = data.addresses.map(address => ({
        codigoProvincia: address.provinceCode,
        endereco: address.value
      }))
      DepositorPayload.listaIdentificacoes = data.identifications.map(identi => ({
        numero: identi.valueNumber,
        tipo: identi.type
      }))

      const depositor = DepositorPayload;

      const response = await api.createData(endPoint, depositor)

      return response
    } catch (error) {
      console.log("deu erro na api deles: ", error)
      throw error
    }
  }
}
