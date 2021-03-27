import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { BigArrowSVG } from '../../../../assets/svg/BigArrowSVG';
import { IAppState, IFly } from '../../../store/app/app-reducer';
import { styles } from './style';
import { appSetFavorite, appDeleteFavorite } from '../../../store/app/app-actions';
import { HeartSVG } from '../../../../assets/svg/HeartSVG';
import { EmptyHeartSVG } from '../../../../assets/svg/EmptyHeartSVG';
import { ArrowBackSVG } from '../../../../assets/svg/ArrowBackSVG';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../../navigation/StackNavigation';

interface IRouteParams {
  params: {
    id: string;
  };
}

interface IProps {
  navigation: StackNavigationProp<RootParamList, 'ViewFlight'>;
  route: IRouteParams;
  flying: IFly[] | null;
  favourites: IFly[];
  appSetFavorite: typeof appSetFavorite;
  appDeleteFavorite: typeof appDeleteFavorite;
}

class ViewFlight extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  private changeFavorite = (data: string | IFly): void => {
    typeof data === 'string' ? this.props.appDeleteFavorite(data) : this.props.appSetFavorite(data);
  };

  render(): JSX.Element {
    const { id } = this.props.route.params;
    const { favourites, flying } = this.props;
    const fly = flying?.find((fly) => fly.id === id);
    if (!fly) {
      return (
        <View style={styles.wrapper__error}>
          <Text>Что-то пошло не так</Text>
        </View>
      );
    }
    const favorite = favourites.find((item) => item.id === fly.id);
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../../assets/image/airplane.jpeg')}
        >
          <View style={styles.wrapper__bottom__view}>
            <TouchableOpacity
              style={styles.wrapper__arrow_back}
              onPress={() => this.props.navigation.goBack()}
            >
              <ArrowBackSVG />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapper__heart}
              onPress={() => this.changeFavorite(favorite ? fly.id : fly)}
            >
              {favorite ? <HeartSVG /> : <EmptyHeartSVG />}
            </TouchableOpacity>
            <View style={styles.wrapper__content}>
              <View style={styles.wrapper__details}>
                <View>
                  <View style={styles.wrapper__date}>
                    <Text style={styles.date__text}>{fly.textOutboundpartialdate}</Text>
                  </View>
                  <View style={styles.wrapper__airport__code}>
                    <Text style={[styles.code__airport]}>{fly.originplace.IataCode}</Text>
                  </View>
                  <View style={styles.wrapper__city__left}>
                    <Text style={styles.date__text}>{fly.originplace.CityName}</Text>
                  </View>
                </View>
                <View style={styles.wrapper__big__arrow}>
                  <BigArrowSVG />
                </View>
                <View>
                  <View style={styles.wrapper__date}>
                    <Text style={styles.date__text}>{fly.time}</Text>
                  </View>
                  <View style={styles.wrapper__airport__code}>
                    <Text style={[styles.code__airport]}>{fly.destinationplace.IataCode}</Text>
                  </View>
                  <View style={styles.wrapper__city__right}>
                    <Text style={styles.date__text}>{fly.destinationplace.CityName}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.wrapper__buttons}>
                <TouchableOpacity style={styles.wrapper__button}>
                  <Text style={styles.price__text}>Price</Text>
                  <Text
                    style={styles.price__number__text}
                  >{`${fly.price} ${fly.currency.Symbol}`}</Text>
                </TouchableOpacity>
                <View style={styles.wrapper__separator} />
                <TouchableOpacity style={styles.wrapper__button}>
                  <Text style={styles.price__text}>Boarding</Text>
                  <Text style={styles.price__number__text}>19:20</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
              <Image
                style={[styles.wrapper__image__carousel, styles.wrapper__image__carousel__first]}
                source={require('../../../../assets/image/1.jpg')}
              />
              <Image
                style={styles.wrapper__image__carousel}
                source={require('../../../../assets/image/2.jpg')}
              />
              <Image
                style={styles.wrapper__image__carousel}
                source={require('../../../../assets/image/3.jpg')}
              />
              <Image
                style={styles.wrapper__image__carousel}
                source={require('../../../../assets/image/4.jpg')}
              />
              <Image
                style={styles.wrapper__image__carousel}
                source={require('../../../../assets/image/5.jpg')}
              />
              <Image
                style={[styles.wrapper__image__carousel, styles.wrapper__image__carousel__last]}
                source={require('../../../../assets/image/6.jpg')}
              />
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = ({ flying, favourites }: IAppState) => ({
  flying,
  favourites,
});

export default connect(mapStateToProps, { appSetFavorite, appDeleteFavorite })(ViewFlight);
