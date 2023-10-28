import { RefObject } from "react";

export interface IHotSpotDot {
    ID: string;
    XCoordinates: number;
    YCoordinates: number;
}

export enum HotSpotModes {
    EDIT = 'EDIT',
    REPOSITION = 'REPOSITION',
    SELECTION = 'SELECTION',
    REMOVE = 'REMOVE'
}

export interface IHotspotHookProps {
    ParentRef: RefObject<HTMLElement>;
    HotspotDotsInitial: IHotSpotDot[];
    ActiveMode : HotSpotModes | null;
    onHotspotClick?: (Hotspot : IHotSpotDot) => void;
    onHotspotRemoved?: (HotSpot : IHotSpotDot[]) => void;
  }