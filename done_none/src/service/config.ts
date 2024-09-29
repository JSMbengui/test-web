export class API_CONFIG {

  static readonly NAME_TESTE = "bcp";
  static readonly PASSWORD_TESTE = "MM4$bcp!s&90";

  static readonly NAME_PDR = "bpc";
  static readonly PASSWORD_PDR = "?B2kp#C!aO";
  /**
   * Maquina de teste BNA
   */
  static readonly BASE_URL_TEST = "http://172.20.41.201:8081/sgfgdback/rest/sgfgdService/v1";
  /**
   * Maquina de produçao BNA
   */
  static readonly BASE_URL_PRD: string = "http://172.20.143.29/sgfgdback/rest/sgfgdService/v1";

  static readonly PERIOD_DATE = {
    year: '2024',
    month: '06',
    day: '30'
  }
}

export class DATABASE_CONFIG {
  static readonly user = 'seuUsuario'
  static readonly password = 'suaSenha'
  static readonly server = 'seuServidor'
  static readonly database = 'seuBancoDeDados'
  static readonly options = {
    encrypt: true,
    trustServerCertificate: true
  }
}