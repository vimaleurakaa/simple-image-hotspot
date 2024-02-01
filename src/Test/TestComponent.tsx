import React, { useState } from "react";
import { HotSpotMapper } from "../Lib/Components/HotSpotContainer";
import { MockDots } from "../Lib/Models/Constants";
import { HotSpotModes, IHotSpotDot } from "../Lib/Models/HotSpotModels";
import "../styles/index.scss";

type Props = {};

export const TestComponent = (props: Props) => {
  const [ActiveMode, setActiveMode] = useState(HotSpotModes.SELECTION);
  return (
    <>
      <HotSpotMapper
        isEditable
        onHotspotClick={console.log}
        HotspotDotsInitial={MockDots}
        onHotspotAdded={(e) => console.log(e)}
        onHotspotRepositioned={(e) => console.log(e)}
        onHotspotRemoved={(e) => console.log(e)}
        ImageSource="./sample.png"
        ActiveMode={ActiveMode}
        mapActiveColors={HotSpotModes.SELECTION === ActiveMode}
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
        CustomHotspotChildrenElement={(Hotspot: IHotSpotDot) => <h2>{Hotspot.ID}</h2>}
      />

      
      <select onChange={(e) => setActiveMode(e.target.value as HotSpotModes)}>
        {Object.values(HotSpotModes).map((m) => (
          <option value={m} key={m}>{m}</option>
        ))}
      </select>
    </>
  );
};
