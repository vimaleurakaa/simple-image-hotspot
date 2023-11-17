import { RefObject } from "react";

export enum AttachmentTypes {
  IMAGE = "IMAGE",
  PRODUCT = "PRODUCT",
}
export interface IHotSpotDot {
  ID: string;
  XCoordinates: number;
  YCoordinates: number;
  ReferenceID: string | null;
  AttachmentType: AttachmentTypes;
  Color: string;
}

export enum HotSpotModes {
  SELECTION = "Select",
  REPOSITION = "Reposition",
  EDIT = "Add New",
  REMOVE = "Delete",
}
export interface IHotspotHookProps {
  ParentRef: RefObject<HTMLElement>;
  HotspotDotsInitial: IHotSpotDot[];
  ActiveMode: HotSpotModes | null;
  onHotspotClick?: onHotSpotType;
  onHotspotRemoved?: onHotSpotArrayType;
  onHotspotRepositioned?: onHotSpotType;
  onHotspotAdded?: onHotSpotType;
}

export interface IHotSpotMapper {
  isEditable?: boolean;
  className?: string;
  ActiveMode?: HotSpotModes;
  HotspotDotsInitial?: IHotSpotDot[];
  ImageSource?: string;
  onHotspotClick?: onHotSpotType;
  onHotspotRemoved?: onHotSpotArrayType;
  HopSpotNodeChildren?: HopSpotNodeChildren;
  onHotspotRepositioned?: onHotSpotType;
  onHotspotAdded?: onHotSpotType;
  mapActiveColors: boolean;
}

export type onHotSpotArrayType = (HotSpot: IHotSpotDot[]) => void;
export type onHotSpotType = (HotSpot: IHotSpotDot) => void;
export type HotSpotHandlerType = (e: React.MouseEvent<HTMLElement>) => void;
export type HotSpotClickHandlerType = (e: React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => void;
export type HopSpotNodeChildren = (selectedHotSpotOptions: string | null, setSelectedHotSpotOptions: setSelectedHotspotType) => React.ReactNode;
export type setSelectedHotspotType = React.Dispatch<React.SetStateAction<string | null>>;
