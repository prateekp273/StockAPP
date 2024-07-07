import React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface IconType {
  fillColor: string;
  width: string;
  height: string;
}

export default function AppleLogoIcon({
  fillColor = 'white',
  width = '512',
  height = '512',
}: IconType): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox={'0 0 512 512'}>
      <Path
        d={
          'M349.13 136.86C308.81 136.86 291.77 156.1 263.69 156.1C234.9 156.1 212.94 137 178 137C143.8 137 107.33 157.88 84.1701 193.45C51.6501 243.61 57.1701 338.08 109.84 418.56C128.68 447.37 153.84 479.68 186.84 480.03H187.44C216.12 480.03 224.64 461.25 264.11 461.03H264.71C303.59 461.03 311.39 479.92 339.95 479.92H340.55C373.55 479.57 400.06 443.77 418.9 415.07C432.46 394.43 437.5 384.07 447.9 360.72C371.71 331.8 359.47 223.79 434.82 182.38C411.82 153.58 379.5 136.9 349.03 136.9L349.13 136.86Z'
        }
        fill={fillColor}
      />
      <Path
        d={
          'M340.25 32C316.25 33.63 288.25 48.91 271.85 68.86C256.97 86.94 244.73 113.76 249.53 139.77H251.45C277.01 139.77 303.17 124.38 318.45 104.66C333.17 85.89 344.33 59.29 340.25 32Z'
        }
        fill={fillColor}
      />
    </Svg>
  );
}
