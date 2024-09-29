// Definindo a estrutura do payload
interface GenericRequest {
  saldoMedioConta: number;
  montanteConta: number;
  montanteIndisponivel: number;
  jurosBruto: number;
  jurosLiquido: number;
  dataPeriodo: string;  // Formato ISO 8601 esperado
}

interface Payload {
  referencia: string;
  numeroConta: string;
  genericRequest: GenericRequest;
}

// Exemplo de uso da função
export const PositionPayload: Payload = {
  referencia: 'XXXXXXX',
  numeroConta: 'ZZZZZZ',
  genericRequest: {
    saldoMedioConta: 12345.67,    // Exemplo de valor numérico
    montanteConta: 23456.78,      // Exemplo de valor numérico
    montanteIndisponivel: 34567.89, // Exemplo de valor numérico
    jurosBruto: 4567.89,          // Exemplo de valor numérico
    jurosLiquido: 5678.90,        // Exemplo de valor numérico
    dataPeriodo: '2024-08-21T00:00:00' // Data no formato ISO 8601
  }
};
