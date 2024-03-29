import cx from 'classnames';
import React, { useCallback, useState } from 'react';
import { PERCENT_UNIT } from '../Models/Constants';
import { HotSpotClickHandlerType, HotSpotModes, IHotSpotDot } from '../Models/HotSpotModels';
interface IDotIndicator {
  HotSpotDots: IHotSpotDot[];
  HotSpotClickHandler?: HotSpotClickHandlerType;
  isEditable?: boolean;
  ActiveMode: HotSpotModes;
  HopSpotNodeChildren?: (selectedHotSpotOptions: string| null, setSelectedHotSpotOptions: React.Dispatch<React.SetStateAction<string | null>>) => React.ReactNode;
  mapActiveColors: boolean;
  CustomHotspotChildrenElement?: (HotSpotDot: IHotSpotDot) => React.ReactNode;
};

const DotIndicatorInnerView = (props: IDotIndicator) => {
  const { HotSpotDots, HotSpotClickHandler, isEditable, ActiveMode, HopSpotNodeChildren, mapActiveColors, CustomHotspotChildrenElement } = props;
  const [selectedHotSpotOptions, setSelectedHotSpotOptions] = useState<string | null>(null);

  const HotSpotClickHandlerInner = useCallback((e: React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => {
    HotSpotClickHandler?.(e, HotSpot);
    if(isEditable && ActiveMode === HotSpotModes.SELECTION) {
      setSelectedHotSpotOptions(HotSpot.ID);
    }
  }, [isEditable, ActiveMode, HotSpotDots]);
  
  return (
    <div>
      {(HotSpotDots ?? []).map((HotSpot: IHotSpotDot) => (
        <div key={HotSpot.ID} className="dot-container">
          <div
            className={cx("hotspot__dots hotspot__ripple", {
              disableDefaultHotspot: !!CustomHotspotChildrenElement
            })}
            style={{
              top: HotSpot.YCoordinates + PERCENT_UNIT,
              left: HotSpot.XCoordinates + PERCENT_UNIT,
              background: mapActiveColors ? HotSpot.Color : "revert-layer",
              border: mapActiveColors ? "3px solid #fff" : "none",
            }}
            onClick={(e) => HotSpotClickHandlerInner?.(e, HotSpot)}
          >
            {CustomHotspotChildrenElement
              ? CustomHotspotChildrenElement(HotSpot)
              : isEditable &&
                ActiveMode === HotSpotModes.SELECTION &&
                HopSpotNodeChildren && (
                  <div
                    className={cx("hotSpotSelection__nodeContainer", {
                      isActive: selectedHotSpotOptions === HotSpot.ID,
                    })}
                  >
                    {HopSpotNodeChildren(selectedHotSpotOptions, setSelectedHotSpotOptions)}
                  </div>
                )}
          </div>
        </div>
      ))}
    </div>
  );
}

export const DotIndicator = React.memo(DotIndicatorInnerView);