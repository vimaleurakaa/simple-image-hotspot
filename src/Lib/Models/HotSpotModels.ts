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
    onHotspotClick?: onHotSpotType;
    onHotspotRemoved?: onHotSpotArrayType;
  }

export interface IHotSpotMapper {
    isEditable?: boolean;
    onHotspotClick?: onHotSpotType;
    className?: string;
    children?: React.ReactElement;
    ActiveMode?: HotSpotModes;
    onHotspotRemoved?: onHotSpotArrayType;
    HotspotDotsInitial?: IHotSpotDot[];
    ImageSource: string;
}

export type onHotSpotArrayType = (HotSpot: IHotSpotDot[]) => void;
export type onHotSpotType = (HotSpot: IHotSpotDot) => void;
export type HotSpotHandlerType = (e: React.MouseEvent<HTMLElement>) => void;
export type HotSpotClickHandlerType = (e: React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => void;