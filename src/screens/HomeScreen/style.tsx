import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../assets';
import {normalizeFont, normalizeHeight, normalizeWidth, pixelSizeX, pixelSizeY} from '../../utils/sizes';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heading: {
    paddingVertical: pixelSizeY(17),
    paddingLeft: pixelSizeX(33),
    fontFamily: FONTS.poppinsBlack,
    fontSize: normalizeFont(22),
    color: COLORS.black,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1.4,
  },
  bodyStyle: {
    marginTop: pixelSizeY(9),
    width: '100%',
  },
  cardStyle: {
    width: '42%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderColor: COLORS.grey3,
    paddingLeft: pixelSizeX(7),
    borderWidth: 1.4,
    marginBottom: pixelSizeY(12),
    marginLeft: pixelSizeX(22),
  },
  logoMainStyle: {
    marginVertical: pixelSizeY(12),
    borderRadius: 50,
    borderColor: COLORS.grey3,
    borderWidth: 1,
    width: normalizeWidth(50) ,
    height:normalizeHeight(50) ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: normalizeFont(17),
    color: COLORS.black,
    paddingBottom: 12,
  },
  price: {
    fontFamily: FONTS.poppinsBlack,
    fontSize: normalizeFont(15),
    color: COLORS.grey13,
  },
  percentageMain: {
    flexDirection: 'row',
  },
  percentageStyle: {
    fontFamily: FONTS.poppinsBlack,
    fontSize: normalizeFont(15),
    color: COLORS.green2,
    marginBottom: pixelSizeY(12),
  },
  buttonMainStyle: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    color: COLORS.black,
    borderTopColor: COLORS.black,
    borderTopWidth: 1.4,
    borderColor: COLORS.black,
  },
  firstBtnStyle: {
    width: '50%',
    height: '91%',
    backgroundColor: 'coral',
    borderRightColor: COLORS.black,
    borderRightWidth: 1.4,
    borderRadius: 0,
    borderColor: COLORS.black,
  },
  btnStyle: {
    borderRadius: 0,
    width: '50%',
    height: '91%',
    backgroundColor: COLORS.white,
  },
  textStyle: {
    color: COLORS.black,
    fontSize: normalizeFont(25),
  },
});

export default styles;
