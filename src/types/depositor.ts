export interface Telefone {
  telefone: string;
  principal?: boolean;
}

export interface Email {
  email: string;
}

export interface Endereco {
  endereco: string;
  codigoProvincia: string;
}

export interface Identificacao {
  numero: string;
  tipo: string;
}

export interface GenericRequest {
  nome: string;
  referencia: string;
  tipoDepositante: string;
}

export interface Payload {
  listaTelefones: Telefone[];
  listaEmails: Email[];
  listaEnderecos: Endereco[];
  listaIdentificacoes: Identificacao[];
  genericRequest: GenericRequest;
}

export const DepositorPayload: Payload = {
  listaTelefones: [
    { telefone: '', principal: true },
    { telefone: '' }
  ],
  listaEmails: [
    { email: '' }
  ],
  listaEnderecos: [
    { endereco: '', codigoProvincia: '' }
  ],
  listaIdentificacoes: [
    { numero: '', tipo: '' }
  ],
  genericRequest: {
    nome: '',
    referencia: '',
    tipoDepositante: ''
  }
};

