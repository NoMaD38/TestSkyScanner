import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AirplaneSVG } from '../../../../assets/svg/AirplaneSVG';
import { ArrowSVG } from '../../../../assets/svg/ArrowSVG';
import { EmptyHeartSVG } from '../../../../assets/svg/EmptyHeartSVG';
import { HeartSVG } from '../../../../assets/svg/HeartSVG';
import { IFly } from '../../../store/app/app-reducer';
import { styles } from './style';

interface IProps {
  openCard: () => void;
  changeFavorite: (data: string | IFly) => void;
  data: IFly;
  favorite: boolean;
}

export default class FlightCard extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const { openCard, data, changeFavorite, favorite } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.wrapper__flight}
        onPress={() => openCard()}
      >
        <TouchableOpacity
          style={styles.wrapper__heart}
          onPress={() => changeFavorite(favorite ? data.id : data)}
        >
          {favorite ? <HeartSVG /> : <EmptyHeartSVG />}
        </TouchableOpacity>
        <View style={styles.wrapper__info}>
          <View style={styles.wrapper__airplane__svg}>
            <AirplaneSVG />
          </View>
          <View style={styles.wrapper__info__flight}>
            <View style={styles.wrapper__cities}>
              <View style={styles.wrapper__city}>
                <Text style={[styles.header__text]}>{data.originplace.CityName}</Text>
              </View>
              <View style={styles.wrapper__arrow__svg}>
                <ArrowSVG />
              </View>
              <View style={styles.wrapper__city}>
                <Text style={[styles.header__text]}>{data.destinationplace.CityName}</Text>
              </View>
            </View>
            <View style={styles.wrapper__details__flight}>
              <View style={styles.wrapper__originplace}>
                <Text style={styles.info__text}>{data.originplace.IataCode}</Text>
              </View>
              <View style={styles.wrapper__dash} />
              <View style={styles.wrapper__date}>
                <Text style={styles.info__text}>{data.textOutboundpartialdate}</Text>
              </View>
              <View style={styles.wrapper__dash} />
              <View style={styles.wrapper__time}>
                <Text style={styles.info__text}>{data.time}</Text>
              </View>
            </View>
            <View style={styles.wrapper__carrier}>
              <Text style={styles.info__text}>{data.carrier.Name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapper__border__flight} />
        <View style={styles.wrapper__price}>
          <View style={styles.wrapper__text__price}>
            <Text style={styles.price__text}>Price:</Text>
          </View>
          <View style={styles.wrapper__price__numbers__text}>
            <Text
              style={styles.price__numbers__text}
            >{`${data.price} ${data.currency.Symbol}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
