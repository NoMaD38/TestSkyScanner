import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { RootParamList } from '../../../navigation/StackNavigation';
import { IAppState, IFly } from '../../../store/app/app-reducer';
import FlightsContainer from './FlightsContainer';
import Header from './Header';
import { styles } from './style';

interface IProps {
  navigation: StackNavigationProp<RootParamList, 'FlightList'>;
  flying: IFly[] | null;
}

interface IState {
  browse: boolean;
}

class FlightList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      browse: true,
    };
  }

  private changeList = () => this.setState((prevState) => ({ browse: !prevState.browse }));

  public openCard = (id: string) => this.props.navigation.navigate('ViewFlight', { id });

  render() {
    const { flying } = this.props;

    const { browse } = this.state;
    return (
      <View style={styles.container}>
        <Header browse={browse} changeList={this.changeList} />
        {flying ? (
          <FlightsContainer openCard={this.openCard} browse={browse} />
        ) : (
          <ActivityIndicator
            style={styles.wrapper__activity__indicator}
            size="large"
            color="#1157A7"
          />
        )}
        {Array.isArray(flying) && flying.length < 1 && (
          <Text style={[styles.header__text, styles.wrapper__error]}> Ничего не найдено </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ flying }: IAppState) => ({
  flying,
});

export default connect(mapStateToProps, {})(FlightList);
