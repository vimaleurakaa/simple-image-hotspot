import React from 'react';
import { ImageFileIcon } from '../Icons/PlaceHolderImage';

type IPlaceHolderProps = {}

const ImagePlaceHolderInnerView = (props: IPlaceHolderProps) => {
const {} = props;
  return (
    <div className="hotspot__image__placeholder">
      <div className="placeHolder__wrapper">
        <ImageFileIcon />
        <div className="placeHolder__title">
          Image Preview is unavailable. <br />
          Please select and upload an image if you are an administrator.</div>
      </div>
    </div>
  );
}

export const ImagePlaceHolder = React.memo(ImagePlaceHolderInnerView);