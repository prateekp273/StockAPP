import {StyleSheet} from 'react-native';
import {
  normalizeFont,
  normalizeHeight,
  normalizeWidth,
  pixelSizeX,
  pixelSizeY,
} from '../../utils/sizes';
import {COLORS} from '../../assets';

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  Container: {
    height: '100%',
    backgroundColor: COLORS.white,
    marginHorizontal: pixelSizeX(12),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeX(12),
    justifyContent: 'space-between',
    paddingVertical: pixelSizeY(7),
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1.4,
  },
  header: {
    fontSize: normalizeFont(22),
    color: COLORS.black,
  },
  InputViewStyle: {
    width: '37%',

    borderRadius: 9,
    height: '90%',
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  itemHeaderStyle: {
    flexDirection: 'row',

    paddingVertical: pixelSizeY(27),
    alignItems: 'center',
  },
  logoMainStyle: {
    borderRadius: 50,
    borderColor: COLORS.grey3,
    borderWidth: 1,
    width: normalizeWidth(50),
    height: normalizeHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    width: '58%',
    paddingLeft: pixelSizeX(22),
  },
  title: {
    fontWeight: '500',
    fontSize: normalizeFont(17),
    color: COLORS.black,
  },
  textStyle: {
    fontSize: normalizeFont(12),
    color: COLORS.black,
  },
  priceBox: {
    width: '28%',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: normalizeFont(14),
    color: COLORS.black,
    fontWeight: '500',
  },
  percentageStyle: {
    fontSize: normalizeFont(14),
    color: COLORS.green2,
  },
  aboutMainStyle: {
    borderRadius: 9,
    borderColor: COLORS.grey,
    borderWidth: 1.4,
  },
  aboutTitle: {
    fontWeight: '500',
    fontSize: normalizeFont(19),
    color: COLORS.black,
    paddingVertical: pixelSizeY(12),

    paddingHorizontal: pixelSizeX(12),
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1.4,
  },
  about: {
    fontWeight: '500',
    fontSize: normalizeFont(14),
    color: COLORS.grey2,

    lineHeight: 19,
    paddingHorizontal: pixelSizeX(12),
    paddingVertical: pixelSizeY(12),
  },
  boxMainStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: pixelSizeY(12),
    paddingHorizontal: pixelSizeX(12),
  },
  industryBox: {
    backgroundColor: COLORS.orange1,
    borderRadius: 27,
    marginTop: pixelSizeY(7),
    paddingHorizontal: 12,
    marginRight: pixelSizeX(9),
  },
  sectorBox: {
    backgroundColor: COLORS.orange1,
    borderRadius: 27,
    marginTop: pixelSizeY(7),
    paddingHorizontal: 12,
  },
  boxTextStyle: {
    fontSize: normalizeFont(12),
    color: COLORS.orange,
    fontWeight: '500',
    marginVertical: pixelSizeY(12),
    marginHorizontal: pixelSizeX(4),
  },
  weekBoxMain: {
    flexDirection: 'row',

    marginVertical: pixelSizeY(12),
    paddingHorizontal: pixelSizeX(12),
  },

  weekLow: {
    width: '28%',
  },
  currentPrice: {
    alignItems: 'center',
    width: '44%',
  },
  weekHigh: {
    width: '28%',
    alignItems: 'flex-end',
  },
  weekTextStyle: {
    fontWeight: '500',
    fontSize: normalizeFont(14),
  },
  lineStyle: {
    marginTop: pixelSizeY(2),
    backgroundColor: COLORS.grey3,
    width: '100%',
    height: 3,
    borderRadius: 12,
  },
  priceDetailMain: {
    paddingVertical: pixelSizeY(12),
    flexDirection: 'row',
    paddingHorizontal: 12,
    flexWrap: 'wrap',
  },
  priceDetailBox: {
    width: '25%',
    marginRight: pixelSizeX(22),
    marginBottom: pixelSizeY(12),
  },
});
