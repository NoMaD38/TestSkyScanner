import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MainStack from '../navigation/StackNavigation';
import { styles } from './style';
import { appGetFlights } from '../store/app/app-actions';

interface IProps {
  appGetFlights: typeof appGetFlights;
}

class AppContainer extends Component<IProps> {
  public componentDidMount() {
    this.props.appGetFlights();
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <MainStack />
      </View>
    );
  }
}

export default connect(null, { appGetFlights })(AppContainer);
