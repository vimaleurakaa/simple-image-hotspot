import React from 'react';
import { PERCENT_UNIT } from '../Models/Constants';
import { HotSpotClickHandlerType, IHotSpotDot } from '../Models/HotSpotModels';
interface IDotIndicator {
  HotSpotDots: IHotSpotDot[];
  HotSpotClickHandler?: HotSpotClickHandlerType;
};

const DotIndicatorInnerView = (props: IDotIndicator) => {
  const { HotSpotDots, HotSpotClickHandler } = props;
  
  return (
    <div>
      {(HotSpotDots ?? []).map((HotSpot: IHotSpotDot) => (
        <div key={HotSpot.ID} className="dot-container">
          <div
            className="hotspot__dots hotspot__ripple"
            style={{
              top: HotSpot.YCoordinates + PERCENT_UNIT,
              left: HotSpot.XCoordinates + PERCENT_UNIT,
            }}
            onClick={(e) => HotSpotClickHandler?.(e, HotSpot)}
          >
          </div>
        </div>
      ))}
    </div>
  );
}

export const DotIndicator = React.memo(DotIndicatorInnerView);