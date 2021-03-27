import React, { PureComponent } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './style';

interface IProps {
  browse: boolean;
  changeList: () => void;
}

export default class Header extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const { browse, changeList } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.wrapper__header__text}>
          <Text style={styles.header__text}>Flights</Text>
        </View>
        <View style={styles.wrapper__buttons}>
          <Pressable disabled={!browse} style={styles.header__button} onPress={() => changeList()}>
            <Text style={[styles.header__text, styles.header__button__text]}>Favourites</Text>
            {!browse && <View style={styles.header__button__border} />}
          </Pressable>
          <Pressable disabled={browse} style={styles.header__button} onPress={() => changeList()}>
            <Text style={[styles.header__text, styles.header__button__text]}>Browse</Text>
            {browse && <View style={styles.header__button__border} />}
          </Pressable>
        </View>
      </View>
    );
  }
}
