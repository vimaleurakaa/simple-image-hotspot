import React, { useState } from "react";
import { HotSpotMapper } from "../Lib/Components/HotSpotContainer";
import { MockDots } from "../Lib/Models/Constants";
import { HotSpotModes } from "../Lib/Models/HotSpotModels";
import "../styles/index.scss";
import DemoContainer from "./Mock";

type Props = {};

export const TestComponent = (props: Props) => {
  const [ActiveMode, setActiveMode] = useState(HotSpotModes.SELECTION);
  return (
    <>
      <HotSpotMapper
        isEditable
        onHotspotClick={console.log}
        HotspotDotsInitial={MockDots}
        ImageSource="./sample.png"
        ActiveMode={ActiveMode}
        HopSpotNodeChildren={(selectedHotSpotOptions, setSelectedHotSpotOptions) => {
          return (
            <button
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                setSelectedHotSpotOptions(null);
              }}
            >
              Click {selectedHotSpotOptions}
            </button>
          );
        }}
      >
        <DemoContainer />
      </HotSpotMapper>

      
      <select onChange={(e) => setActiveMode(e.target.value as HotSpotModes)}>
        {Object.values(HotSpotModes).map((m) => (
          <option value={m} key={m}>{m}</option>
        ))}
      </select>
    </>
  );
};
