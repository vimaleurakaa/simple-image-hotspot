import React from 'react';
import { HotSpotMapper } from "../Lib/Components/HotSpotContainer";
import { MockDots } from "../Lib/Models/Constants";
import { HotSpotModes } from "../Lib/Models/HotSpotModels";
import '../styles/index.scss';
import DemoContainer from './Mock';

type Props = {};

export const TestComponent = (props: Props) => {
  return (
    <>
      <HotSpotMapper
        isEditable
        onHotspotClick={console.log}
        HotspotDotsInitial={MockDots}
        ImageSource="/sample.png"
        ActiveMode={HotSpotModes.EDIT}
      >
        <DemoContainer />
      </HotSpotMapper>
    </>
  );
}