import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowBackSVG = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 4.293a1 1 0 010 1.414L7.414 11H19a1 1 0 110 2H7.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill="#000"
        fillOpacity={0.54}
      />
    </Svg>
  );
};
