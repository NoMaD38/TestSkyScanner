import axios, { AxiosInstance } from 'axios';
import { IData } from '../store/app/app-reducer';

const BASE_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/';

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'x-rapidapi-key': '7bcc978752msh398412d62a45e40p1e3738jsn22b1cf85cb1a',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    });
  }

  public async getFlights(
    outboundpartialdate: string = '2021-03-26',
    inboundpartialdate: string = '2021-04-04',
    country = 'RU',
    currency = 'RUB',
    locale = 'en-US',
    originplace = 'VKO',
    destinationplace = 'JFK'
  ): Promise<IData> {
    try {
      const res = await this.instance.get<IData>(
        `${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}`,
        {
          params: {
            inboundpartialdate,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new Api();
