import axios, { Axios, AxiosInstance, AxiosResponse } from "axios"
import { API_CONFIG } from "./config";

export class DepositGuaranteeFundService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL_TEST,
      auth: {
        username: API_CONFIG.NAME_TESTE,
        password: API_CONFIG.PASSWORD_TESTE
      }
    });
  }

  async getData(endpoint: string): Promise<AxiosResponse<any, any>> {
    try {
      const response = await this.client.get(endpoint, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
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
      return response.data;
    } catch (error) {
      console.error('Error making request:', error);
      throw error;
    }
  }
}
