import axios, { Axios, AxiosInstance, AxiosResponse } from "axios"
import { API_CONFIG } from "./config";
import https from 'https'

export class DepositGuaranteeFundService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL_TEST,
      auth: {
        username: API_CONFIG.NAME_TESTE,
        password: API_CONFIG.PASSWORD_TESTE
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })

      /* baseURL: API_CONFIG.BASE_URL_PRD,
      auth: {
        username: API_CONFIG.NAME_PDR,
        password: API_CONFIG.PASSWORD_PDR
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }) */

    });
  }

  async getData(endpoint: string): Promise<AxiosResponse<any, any>> {
    try {
      const response = await this.client.get(endpoint, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response;
    } catch (error) {
      console.error('Error making request:', error);
      throw error;
    }
  }
  async createData(endpoint: string, data: unknown): Promise<AxiosResponse<any, any>> {
    try {
      const response = await this.client.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response;
    } catch (error) {
      console.error('Error making request:', error);
      throw error;
    }
  }
}
