import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowSVG = () => {
  return (
    <Svg width={14} height={10} viewBox="0 0 14 10" fill="none">
      <Path d="M1 5h12M9 1l4 4-4 4" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};
