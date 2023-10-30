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
}

export interface IHotSpotMapper {
  isEditable?: boolean;
  className?: string;
  children?: React.ReactElement;
  ActiveMode?: HotSpotModes;
  HotspotDotsInitial?: IHotSpotDot[];
  ImageSource?: string;
  onHotspotClick?: onHotSpotType;
  onHotspotRemoved?: onHotSpotArrayType;
  HopSpotNodeChildren?: HopSpotNodeChildren;
}

export type onHotSpotArrayType = (HotSpot: IHotSpotDot[]) => void;
export type onHotSpotType = (HotSpot: IHotSpotDot) => void;
export type HotSpotHandlerType = (e: React.MouseEvent<HTMLElement>) => void;
export type HotSpotClickHandlerType = (e: React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => void;
export type HopSpotNodeChildren = (selectedHotSpotOptions: string | null, setSelectedHotSpotOptions: setSelectedHotspotType) => React.ReactNode;
export type setSelectedHotspotType = React.Dispatch<React.SetStateAction<string | null>>;
