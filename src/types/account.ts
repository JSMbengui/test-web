

// Definindo a estrutura do payload
interface GenericRequest {
  numeroConta: string;
  caracteristicaConta: string;
  codigoMoeda: string;
  naturezaConta: string;
  codigoInclusaoExclusao: string;
}

interface Payload {
  referencia: string;
  listaOutrosTitulares: string[];
  genericRequest: GenericRequest;
}

// Exemplo de uso da função
export const AccountPayload: Payload = {
  referencia: 'XXXXX',
  listaOutrosTitulares: ['AAA', 'BBB', 'CCC'],
  genericRequest: {
    numeroConta: 'XXXXXXX',
    caracteristicaConta: 'XX',
    codigoMoeda: 'XX',
    naturezaConta: 'XX',
    codigoInclusaoExclusao: 'X'
  }
};