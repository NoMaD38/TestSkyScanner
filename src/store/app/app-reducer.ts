import { mockData } from '../../utils/mockData';
import { AppActionTypes } from './app-actions';
import { APP_SET_FLIGHTS, APP_SET_FAVORITE, APP_DELETE_FAVORITE } from './app-types';

export interface IData {
  Carriers: ICarrier[];
  Currencies: ICurrency[];
  Places: IPlace[];
  Quotes: Quote[];
  Routes: Route[];
}

interface ICarrier {
  CarrierId: number;
  Name: string;
}

interface ICurrency {
  Code: string;
  Symbol: string;
}

interface IPlace {
  CityId: string;
  CityName: string;
  CountryName: string;
  IataCode: string;
  Name: string;
  PlaceId: number;
  SkyscannerCode: string;
}

interface Quote {
  Direct: boolean;
  MinPrice: number;
  QuoteDateTime: string;
  OutboundLeg: {
    CarrierIds: number[];
    DepartureDate: string;
    DestinationId: number;
    OriginId: number;
  };
  QuoteId: number;
}

interface Route {
  DestinationId: number;
  OriginId: number;
  Price: number;
  QuoteDateTime: string;
  QuoteIds: number[];
}

export interface IAppState {
  flying: IFly[] | null;
  favourites: IFly[];
}

export interface IFly {
  id: string;
  textOutboundpartialdate: string;
  textInboundpartialdate: string;
  time: string;
  originplace: IPlace;
  destinationplace: IPlace;
  currency: ICurrency;
  carrier: ICarrier;
  price: number;
}

const INITIAL_STATE: IAppState = {
  flying: null,
  favourites: [],
};

export default (state = INITIAL_STATE, action: AppActionTypes): IAppState => {
  switch (action.type) {
    case APP_SET_FLIGHTS:
      const { res, textInboundpartialdate, textOutboundpartialdate } = action.payload;
      const newFlights: IFly[] = [...mockData];
      res.Routes.forEach((item) => {
        item.QuoteIds.forEach((id) => {
          const quote = res.Quotes.find((item) => item.QuoteId === id);
          if (quote) {
            quote.OutboundLeg.CarrierIds.forEach((id) => {
              const carrier = res.Carriers.find((item) => item.CarrierId === id);
              if (carrier) {
                const time = new Date(quote.QuoteDateTime);
                const newFlight: IFly = {
                  id: quote.QuoteId.toString(),
                  currency: {
                    Code: res.Currencies[0].Code,
                    Symbol: res.Currencies[0].Symbol,
                  },
                  textInboundpartialdate,
                  textOutboundpartialdate,
                  originplace: res.Places[1],
                  destinationplace: res.Places[0],
                  price: quote.MinPrice,
                  carrier,
                  time: `${time.getHours()}:${time.getMinutes()}`,
                };
                newFlights.push(newFlight);
              }
            });
          }
        });
      });
      return {
        ...state,
        flying: newFlights,
      };

    case APP_SET_FAVORITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case APP_DELETE_FAVORITE:
      const newFavourites = [...state.favourites];
      const index = newFavourites.findIndex((item) => item.id === action.payload);
      if (index === -1) {
        return state;
      } else {
        newFavourites.splice(index, 1);
        return {
          ...state,
          favourites: newFavourites,
        };
      }
    default:
      return state;
  }
};
