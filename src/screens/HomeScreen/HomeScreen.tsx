import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {AppButton, FocusAwareStatusBar} from '../../components';
import {COLORS, ICONS} from '../../assets';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {gainerAndLoser} from '../../redux/features/stock/stockSlice';
import {LABELS} from '../../labels';

const HomeScreen = () => {
  /*
   * State
   */
  const [active, setIndex] = useState(0);
  /*
   * hooks
   */
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const {LoserData, gainerData, isLoading} = useAppSelector(
    state => state.stockSlice,
  );
  useEffect(() => {
    dispatch(gainerAndLoser());
  }, []);

  return (
    <View style={styles.mainView}>
      <SafeAreaView />
      <FocusAwareStatusBar
        backgroundColor={COLORS.onBoardingColor}
        barStyle={'dark-content'}
      />
      <Text style={styles.heading}>{LABELS.appName}</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.bodyStyle}>
          <FlatList
            style={{height: '83%', width: '100%'}}
            contentContainerStyle={{rowGap: 10}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={active === 0 ? gainerData : LoserData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailScreen', {item});
                  }}
                  key={index}
                  style={styles.cardStyle}>
                  <View style={styles.logoMainStyle}>
                    <ICONS.GoogleLogoIcon width={38} height={38} />
                  </View>
                  <Text style={styles.title}>{item?.ticker}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <View style={styles.percentageMain}>
                    <Text style={styles.percentageStyle}>
                      +{item.change_percentage}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.buttonMainStyle}>
            <AppButton
              activeStyle={{
                backgroundColor: active === 0 ? COLORS.green4 : COLORS.white,
              }}
              btnStyle={styles.firstBtnStyle}
              textStyle={styles.textStyle}
              title="TOP GAINERS"
              onPress={() => {
                setIndex(0);
              }}
            />
            <AppButton
              activeStyle={{
                backgroundColor: active === 1 ? COLORS.red1 : COLORS.white,
              }}
              btnStyle={styles.btnStyle}
              title="TOP LOSERS"
              textStyle={styles.textStyle}
              onPress={() => {
                setIndex(1);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
