
import React from 'react';
import { IHotSpotDot } from '../Models/HotSpotModels';

interface IDotIndicator {
  HotSpotDots: IHotSpotDot[];
  HotSpotClickHandler?: (e:React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => void;
};

const DotIndicatorInnerView = (props: IDotIndicator) => {
  const { HotSpotDots, HotSpotClickHandler } = props;
  
  return (
    <div>
      {(HotSpotDots ?? []).map((HotSpot: IHotSpotDot) => (
        <div key={HotSpot.ID} className="dot-container">
          <div
            className="hotspot__dots"
            style={{
              top: HotSpot.YCoordinates + "%",
              left: HotSpot.XCoordinates + "%",
            }}
            onClick={(e) => HotSpotClickHandler?.(e, HotSpot)}
          >
            {/* {selectedDot === index ? (
                <div className="dot-options">
                  <button onClick={(e) => handleRemoveDot(e, index)}>Remove</button>
                </div>
              ) : null} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export const DotIndicator = React.memo(DotIndicatorInnerView);