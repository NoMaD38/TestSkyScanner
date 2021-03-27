import { IData } from '../store/app/app-reducer';
import Api from './Api';

export interface INewData {
  res: IData;
  textOutboundpartialdate: string;
  textInboundpartialdate: string;
}

export const getFlightList = async (): Promise<INewData> => {
  try {
    const outboundpartialdate = new Date();
    const inboundpartialdate = new Date();
    inboundpartialdate.setDate(inboundpartialdate.getDate() + 10);
    const res = await Api.getFlights(
      outboundpartialdate.toISOString().substring(0, 10),
      inboundpartialdate.toISOString().substring(0, 10)
    );
    const textOutboundpartialdate = `${outboundpartialdate.getDay()} ${outboundpartialdate.toLocaleString(
      'eng',
      { month: 'long' }
    )}, ${outboundpartialdate.getFullYear()}`;
    const textInboundpartialdate = `${inboundpartialdate.getDay()} ${inboundpartialdate.toLocaleString(
      'eng',
      { month: 'long' }
    )}, ${inboundpartialdate.getFullYear()}`;
    return { res, textOutboundpartialdate, textInboundpartialdate };
  } catch (error) {
    throw error;
  }
};
