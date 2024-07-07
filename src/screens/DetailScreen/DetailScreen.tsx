import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import {Chart, FocusAwareStatusBar} from '../../components';
import {COLORS, ICONS} from '../../assets';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {singleCard} from '../../redux/features/stock/stockSlice';
import {singleCardData} from '../../data';
import {LABELS} from '../../labels';
interface ItemType {
  change_amount: string;
  change_percentage: string;
  ticker: string;
  price: string;
  volume: string;
}

interface routeParamsType {
  item: ItemType;
}

interface routeType {
  route: {
    params: routeParamsType;
  };
}

const DetailScreen = ({route}: routeType) => {
  const {params} = route;
  console.log('🚀 ~ DetailScreen ~ item:', params);
  // Accessing the ticker key
  const ticker = params.item.ticker;
  console.log('Ticker:', ticker);
  /* *
  States
   */
  const [search, setSearch] = useState<string>('');
  /* *
      Hook
   */
  const dispatch = useAppDispatch();
  const {singleCardData, isLoading} = useAppSelector(state => state.stockSlice);
  // console.log('🚀 ~ DetailScreen ~ singleCardData:', singleCardData);
  useEffect(() => {
    dispatch(singleCard(ticker));
  }, []);
 
 
  return (
    <View style={styles.MainContainer}>
      <SafeAreaView />
      <FocusAwareStatusBar
        backgroundColor={COLORS.onBoardingColor}
        barStyle={'dark-content'}
      />
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.Container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{LABELS.detailScreen}</Text>
            <TextInput
              placeholderTextColor={COLORS.black}
              style={styles.InputViewStyle}
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
            />
          </View>
          {/* Item Header */}
          <View style={styles.itemHeaderStyle}>
            <View style={styles.logoMainStyle}>
              <ICONS.GoogleLogoIcon width={38} height={38} />
            </View>
            <View style={styles.titleBox}>
              <Text numberOfLines={1} style={styles.title}>
                {singleCardData?.Symbol}
              </Text>
              <Text numberOfLines={1} style={styles.textStyle}>
                {singleCardData?.AssetType}
              </Text>
              <Text numberOfLines={1} style={styles.textStyle}>
                {singleCardData?.Exchange}
              </Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.price}>${singleCardData?.CIK}</Text>
              <Text style={styles.percentageStyle}>
                {singleCardData?.BookValue}{' '}
              </Text>
            </View>
          </View>
          {/* Chart */}
          <Chart
            labels={['50-Day MA', '200-Day MA']}
            data={[ 194.4, 170.5]}
          />
          {/* About section */}
          <View style={styles.aboutMainStyle}>
            <Text numberOfLines={1} style={styles.aboutTitle}>
              {singleCardData?.Name}
            </Text>
            <Text style={styles.about}>{singleCardData?.Description}</Text>
            <View style={styles.boxMainStyle}>
              <View style={styles.industryBox}>
                <Text numberOfLines={1} style={styles.boxTextStyle}>
                  {LABELS.industry}
                  {singleCardData?.Industry}
                </Text>
              </View>
              <View style={styles.sectorBox}>
                <Text style={styles.boxTextStyle}>
                  {LABELS.sector}
                  {singleCardData?.Sector}
                </Text>
              </View>
            </View>

            {/* up and down price*/}
            <View style={styles.weekBoxMain}>
              <View style={styles.weekLow}>
                <Text style={styles.weekTextStyle}>{LABELS.weekLow}</Text>

                <Text style={styles.price}>
                  ${singleCardData?.['52WeekLow']}
                </Text>
              </View>
              <View style={styles.currentPrice}>
                <Text style={styles.weekTextStyle}>{LABELS.currentPrice}</Text>
                <View style={styles.lineStyle} />
              </View>
              <View style={styles.weekHigh}>
                <Text style={styles.weekTextStyle}>{LABELS.weekLow}</Text>
                <Text style={styles.price}>
                  ${singleCardData?.['52WeekHigh']}
                </Text>
              </View>
            </View>
            {/*  price Detail */}
            <View style={styles.priceDetailMain}>
              <View style={styles.priceDetailBox}>
                <Text style={styles.weekTextStyle}>{LABELS.marketCap}</Text>
                <Text style={styles.price}>
                  ${singleCardData?.MarketCapitalization}
                </Text>
              </View>
              <View style={styles.priceDetailBox}>
                <Text style={styles.weekTextStyle}>{LABELS.ratio}</Text>
                <Text style={styles.price}>${singleCardData?.PERatio}</Text>
              </View>
              <View style={styles.priceDetailBox}>
                <Text style={styles.weekTextStyle}>{LABELS.dividend}</Text>
                <Text style={styles.price}>
                  ${singleCardData?.DividendDate}
                </Text>
              </View>
              <View style={styles.priceDetailBox}>
                <Text style={styles.weekTextStyle}>{LABELS.beta}</Text>
                <Text style={styles.price}>${singleCardData?.Beta}</Text>
              </View>
              <View style={styles.priceDetailBox}>
                <Text style={styles.weekTextStyle}>{LABELS.profit}</Text>
                <Text style={styles.price}>
                  ${singleCardData?.ProfitMargin}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DetailScreen;
