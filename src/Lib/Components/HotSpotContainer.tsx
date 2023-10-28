import cx from 'classnames';
import React, { useRef } from 'react';
import { useHotspotDots } from '../Hooks/useHotspotDots';
import { HotSpotModes, IHotSpotDot } from '../Models/HotSpotModels';
import { DotIndicator } from './DotIndicator';

interface IHotSpotMapperInnerViewProps {
  isEditable?: boolean;
  onHotspotClick?: (HotSpot: IHotSpotDot) => void;
  className?: string;
  children?: React.ReactElement;
  ActiveMode?: HotSpotModes;
  onHotspotRemoved?: (HotSpot: IHotSpotDot[]) => void;
  HotspotDotsInitial?: IHotSpotDot[];
  ImageSource: string;
}

const HotSpotMapperInnerView = (props: IHotSpotMapperInnerViewProps) => {
  const {
    isEditable,
    onHotspotClick,
    className = "",
    children = null,
    ActiveMode = HotSpotModes.SELECTION,
    onHotspotRemoved,
    ImageSource,
    HotspotDotsInitial = [],
  } = props;
  const ParentRef = useRef(null);
  const { AddHotSpotDot, HotSpotDots, HotSpotClickHandler, RepositionHotSpotDot } = useHotspotDots({
    ParentRef,
    ActiveMode,
    onHotspotClick,
    onHotspotRemoved,
    HotspotDotsInitial,
  });

  return (
    <div
      className={cx("hotspot__mainWrapper", {
        [className]: className,
        isEditing: ActiveMode === HotSpotModes.EDIT,
        isDeleting: ActiveMode === HotSpotModes.REMOVE,
        isRepositioning: ActiveMode === HotSpotModes.REPOSITION,
        isSelecting: ActiveMode === HotSpotModes.SELECTION,
      })}
    >
      <div className="hotspot__container">
        <div className="hotspot__leftContainer">
          <div className="hotspot__image__container">
            <div
              className="hotspot__image"
              {...(isEditable && ActiveMode === HotSpotModes.EDIT && { onClick: AddHotSpotDot })}
              {...(isEditable &&
                ActiveMode === HotSpotModes.REPOSITION && { onClick: RepositionHotSpotDot })}
              ref={ParentRef}
            >
              <img src={ImageSource} alt="hotspot preview" />
              <DotIndicator HotSpotClickHandler={HotSpotClickHandler} HotSpotDots={HotSpotDots} />
            </div>
          </div>
        </div>

        <div className="hotspot__rightContainer">{children}</div>
      </div>
    </div>
  );
};

HotSpotMapperInnerView.displayName = 'HotSpotMapper';
export const HotSpotMapper = React.memo(HotSpotMapperInnerView)