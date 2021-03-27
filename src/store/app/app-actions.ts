import { INewData } from '../../utils/utils';
import { IFly } from './app-reducer';
import {
  APP_SET_FLIGHTS,
  APP_GET_FLIGHTS,
  APP_SET_FAVORITE,
  APP_DELETE_FAVORITE,
} from './app-types';

export const appSetFlights = (data: INewData) =>
  ({ type: APP_SET_FLIGHTS, payload: data } as const);

export const appGetFlights = () =>
  ({
    type: APP_GET_FLIGHTS,
  } as const);

export const appSetFavorite = (fly: IFly) =>
  ({
    type: APP_SET_FAVORITE,
    payload: fly,
  } as const);

export const appDeleteFavorite = (id: string) =>
  ({
    type: APP_DELETE_FAVORITE,
    payload: id,
  } as const);

export type AppActionTypes =
  | ReturnType<typeof appSetFlights>
  | ReturnType<typeof appGetFlights>
  | ReturnType<typeof appSetFavorite>
  | ReturnType<typeof appDeleteFavorite>;
