import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { IAppState, IFly } from '../../../store/app/app-reducer';
import { appSetFavorite, appDeleteFavorite } from '../../../store/app/app-actions';
import FlightCard from './FlightCard';
import { styles } from './style';

interface IProps {
  openCard: (id: string) => void;
  flying: IFly[] | null;
  favourites: IFly[];
  browse: boolean;
  appSetFavorite: typeof appSetFavorite;
  appDeleteFavorite: typeof appDeleteFavorite;
}

class FlightsContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public changeFavorite = (data: string | IFly) => {
    typeof data === 'string' ? this.props.appDeleteFavorite(data) : this.props.appSetFavorite(data);
  };

  render() {
    const { openCard, flying, favourites, browse } = this.props;

    if (!flying) {
      return <View />;
    }
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapper__scroll}
        renderToHardwareTextureAndroid
      >
        {browse ? (
          <>
            {flying.map((fly) => {
              const favorite = favourites.find((item) => item.id === fly.id);
              return (
                <FlightCard
                  key={fly.id}
                  favorite={favorite ? true : false}
                  data={fly}
                  openCard={() => openCard(fly.id)}
                  changeFavorite={this.changeFavorite}
                />
              );
            })}
          </>
        ) : (
          <>
            {favourites.map((fly) => {
              return (
                <FlightCard
                  key={fly.id}
                  favorite={true}
                  data={fly}
                  openCard={() => openCard(fly.id)}
                  changeFavorite={this.changeFavorite}
                />
              );
            })}
          </>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ flying, favourites }: IAppState) => ({
  flying,
  favourites,
});

export default connect(mapStateToProps, { appSetFavorite, appDeleteFavorite })(FlightsContainer);
