import cx from 'classnames';
import React, { useRef } from 'react';
import { useHotspotDots } from '../Hooks/useHotspotDots';
import { HotSpotModes, IHotSpotMapper } from '../Models/HotSpotModels';
import { DotIndicator } from './DotIndicator';
import { ImagePlaceHolder } from './ImagePlaceHolder';

interface IHotSpotMapperInnerViewProps extends IHotSpotMapper{}

const HotSpotMapperInnerView = (props: IHotSpotMapperInnerViewProps) => {
  const { isEditable, onHotspotClick, className = "", ActiveMode = HotSpotModes.SELECTION,
    onHotspotRemoved, ImageSource, HotspotDotsInitial = [], HopSpotNodeChildren, mapActiveColors, onHotspotAdded, onHotspotRepositioned, ImageComponent } = props;

  const ParentRef = useRef(null);
  const { AddHotSpotDot, HotSpotDots, HotSpotClickHandler, RepositionHotSpotDot } = useHotspotDots({
    ParentRef,
    ActiveMode,
    onHotspotClick,
    onHotspotRemoved,
    HotspotDotsInitial,
    onHotspotAdded,
    onHotspotRepositioned
  });

  return (
    <div
      className={cx("hotspot__mainWrapper", {
        [className]: className,
        isAdmin: isEditable,
        isEditing: ActiveMode === HotSpotModes.EDIT,
        isDeleting: ActiveMode === HotSpotModes.REMOVE,
        isRepositioning: ActiveMode === HotSpotModes.REPOSITION,
        isSelecting: ActiveMode === HotSpotModes.SELECTION,
      })}
    >
      <div className="hotspot__container">

        <div className="hotspot__main__wrapper">
          <div className="hotspot__image__container">
            <div
              className="hotspot__image"
              ref={ParentRef}
              {...(ImageSource && isEditable &&
                ActiveMode === HotSpotModes.EDIT && { onClick: AddHotSpotDot })}
              {...(ImageSource && isEditable &&
                ActiveMode === HotSpotModes.REPOSITION && { onClick: RepositionHotSpotDot })}
            >
              {ImageSource ? (
                <div className='hotspot__sandwich__wrapper'>
                  { ImageComponent ? ImageComponent : <img src={ImageSource} alt="hotspot preview" />}
                  <DotIndicator
                    isEditable={isEditable}
                    ActiveMode={ActiveMode}
                    HotSpotClickHandler={HotSpotClickHandler}
                    HotSpotDots={HotSpotDots}
                    HopSpotNodeChildren={HopSpotNodeChildren}
                    mapActiveColors={mapActiveColors}
                  />
                  
                </div>
              ) : (
                <ImagePlaceHolder />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

HotSpotMapperInnerView.displayName = 'HotSpotMapper';
export const HotSpotMapper = React.memo(HotSpotMapperInnerView)