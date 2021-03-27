import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const STATUSBAR_HEIGHT = getStatusBarHeight();
export const HEADER_HEIGHT = 139 - STATUSBAR_HEIGHT;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  wrapper__bottom__view: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    height: '100%',
    maxHeight: '65%',
    width: '100%',
    paddingBottom: 35,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  wrapper__content: {
    marginHorizontal: 30,
  },

  wrapper__details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 17,
  },

  wrapper__date: {
    marginBottom: 7,
    maxWidth: 100,
  },

  wrapper__airport__code: {
    marginBottom: 5,
    maxWidth: 77,
  },

  wrapper__city__left: {
    maxWidth: 84,
  },

  wrapper__city__right: {
    maxWidth: 90,
  },

  wrapper__big__arrow: {
    marginRight: '20%',
    marginLeft: '10%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  wrapper__buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1157A7',
    borderRadius: 10,
    height: 80,
    marginBottom: 23,
  },

  wrapper__button: {
    width: 116,
  },

  wrapper__separator: {
    width: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
  },

  wrapper__image__carousel: {
    width: 139,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  wrapper__error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper__arrow_back: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 100,
    height: 25,
    width: 25,
  },

  wrapper__heart: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 100,
    height: 25,
    width: 25,
  },

  wrapper__image__carousel__first: {
    marginLeft: 30,
  },

  wrapper__image__carousel__last: {
    marginRight: 30,
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  details__modal: {
    justifyContent: 'flex-end',
    height: '100%',
    margin: 0,
  },

  date__text: {
    fontFamily: 'SF-UI-Text-Light',
    color: '#878787',
    fontSize: 13,
    lineHeight: 22,
  },

  price__text: {
    fontFamily: 'SF-UI-Text-Light',
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 1,
  },

  price__number__text: {
    fontFamily: 'Abel-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 22,
  },

  code__airport: {
    fontFamily: 'Abel-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 36,
  },
});
