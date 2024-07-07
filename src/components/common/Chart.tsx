// import React from 'react';
// import {LineChart} from 'react-native-chart-kit';
// import {View, Text, Dimensions} from 'react-native';
// import { COLORS } from '../../assets';

//  export default  function Chart (): JSX.Element {
//   return (
//     <View>
//       <LineChart
//         data={{
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//           datasets: [
//             {
//               data: [
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//               ],
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisLabel="$ "
//         // yAxisSuffix="k"
//         yAxisInterval={1} // optional, defaults to 1
//         chartConfig={{
//           backgroundColor: 'white',
//           backgroundGradientFrom: COLORS.white,
//           backgroundGradientTo: COLORS.white,
//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           labelColor: (opacity = 1) =>  COLORS.black,
//           // labelColor: (opacity = 1) => `rgba( 0, 0, 0, 0)`,
//           style: {
//             borderRadius: 16,
//             borderWidth: 1,
//             borderColor: '#323232',
//           },
//           propsForDots: {
//             r: '6',
//             strokeWidth: '2',
//             stroke: '#323232',
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//         // withVerticalLines={false}
//         // yLabelsOffset={3}
//       />
//     </View>
//   );
// };

import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {COLORS} from '../../assets';
import {pixelSizeY} from '../../utils/sizes';

interface ChartProps {
  labels: string[];
  data:  number |any;
}

const Chart = ({labels, data}: ChartProps) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: COLORS.white,
          backgroundGradientFrom: COLORS.white,
          backgroundGradientTo: COLORS.white,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => COLORS.black,
          labelColor: () => COLORS.black,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.grey,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1.4,
    borderColor: COLORS.grey,
    paddingVertical: pixelSizeY(7),
    marginVertical: pixelSizeY(12),
  },
});

export default Chart;
