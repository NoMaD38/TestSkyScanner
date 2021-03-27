import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const STATUSBAR_HEIGHT = getStatusBarHeight();
export const HEADER_HEIGHT = 139 - STATUSBAR_HEIGHT;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },

  header: {
    height: HEADER_HEIGHT,
    marginTop: STATUSBAR_HEIGHT,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  wrapper__header__text: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  header__text: {
    fontFamily: 'Abel-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22,
  },

  price__text: {
    fontFamily: 'Abel-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 22,
  },

  price__numbers__text: {
    fontFamily: 'SF-UI-Text-Light',
    color: '#000000',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
  },

  info__text: {
    fontFamily: 'SF-UI-Text-Light',
    color: '#878787',
    fontSize: 13,
    lineHeight: 22,
  },

  wrapper__buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 16,
  },

  header__button: {
    width: 147.5,
  },

  header__button__text: {
    textAlign: 'center',
    paddingBottom: 7,
  },

  header__button__border: {
    backgroundColor: '#1157A7',
    height: 3,
    borderRadius: 2,
  },

  wrapper__flight: {
    flex: 1,
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 16,
    paddingTop: 15,
    paddingBottom: 13,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  wrapper__cities: {
    flexDirection: 'row',
  },

  wrapper__city: {
    maxWidth: '35%',
  },

  wrapper__airplane__svg: {
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper__arrow__svg: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 12,
  },

  wrapper__info: {
    flexDirection: 'row',
  },

  wrapper__info__flight: {
    paddingLeft: 20,
  },

  wrapper__details__flight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapper__originplace: {
    maxWidth: '20%',
  },

  wrapper__date: {
    maxWidth: '50%',
  },

  wrapper__time: {
    maxWidth: '20%',
  },

  wrapper__carrier: {
    maxWidth: '80%',
  },

  wrapper__dash: {
    width: 9,
    height: 1,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 5,
  },

  wrapper__border__flight: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    borderRadius: 2,
    marginTop: 15,
  },

  wrapper__price: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 7.5,
  },

  wrapper__text__price: {
    marginRight: 8,
  },

  wrapper__price__numbers__text: {
    maxHeight: '80%',
  },

  wrapper__activity__indicator: {
    flex: 1,
    justifyContent: 'center',
  },

  wrapper__error: {
    textAlign: 'center',
  },

  wrapper__heart: {
    position: 'absolute',
    right: 5,
    top: 10,
    zIndex: 100,
    height: 25,
    width: 25,
  },

  wrapper__scroll: {
    marginHorizontal: 20,
    flex: 1,
  },
});
