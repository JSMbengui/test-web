export class API_CONFIG {

  static readonly NAME_TESTE = "bcp";
  static readonly PASSWORD_TESTE = "MM4$bcp!s&90";

  static readonly NAME_PDR = "bpc";
  static readonly PASSWORD_PDR = "?B2kp#C!aO";
  /**
   * Maquina de teste BNA
   */
  static readonly BASE_URL_TEST = "https://sgfgdtst.bna.ao/sgfgdback/rest/sgfgdService/v1";
  /**
   * Maquina de produçao BNA
   */
  static readonly BASE_URL_PRD: string = "https://sgfgd.bna.ao/sgfgdback/rest/sgfgdService/v1";
//?B2kp#C!aO

  static readonly PERIOD_DATE = {
    year: '2024',
    month: '06',
    day: '30'
  }
}

export class DATABASE_CONFIG {
  static readonly user = 'jm'
  static readonly password = 'bpc.1234'
  static readonly server = 'VS8000414'
  static readonly database = 'sgfgd'
  static readonly options = {
    encrypt: true,
    trustServerCertificate: true
  }
  static readonly instanceName = "BPCDATABASE"
}