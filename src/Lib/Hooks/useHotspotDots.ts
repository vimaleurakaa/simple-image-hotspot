
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { HotSpotModes, IHotSpotDot, IHotspotHookProps } from "../Models/HotSpotModels";

export interface IUseHotspotDotProps {
  HotSpotDots: IHotSpotDot[];
  AddHotSpotDot: (e: React.MouseEvent<HTMLElement>) => void;
  RepositionHotSpotDot: (e: React.MouseEvent<HTMLElement>) => void;
  HotSpotClickHandler: (e:React.MouseEvent<HTMLElement>, HotSpot: IHotSpotDot) => void;
  RemoveDotHandler: (HotSpot: IHotSpotDot) => void;
}

export const useHotspotDots = (props : IHotspotHookProps)  : IUseHotspotDotProps  => {
  const { ParentRef, ActiveMode, onHotspotClick, onHotspotRemoved, HotspotDotsInitial } = props;
  const [HotSpotDots, setHotSpotDots] = useState<IHotSpotDot[]>(HotspotDotsInitial);
  const [selectedDot, setSelectedDot] = useState<number | null>(null);

  useEffect(() => {
    setHotSpotDots(HotspotDotsInitial);
  }, [HotspotDotsInitial])

  const calculateCoordinates = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const ParentNodeRef = ParentRef.current;
    if (!ParentNodeRef) { return { top: 0, left: 0 }; }

    const ParentNodeRefRect = ParentNodeRef.getBoundingClientRect();
    const ClientCoordinateY = Math.round(e.clientY - ParentNodeRefRect.top - 12);
    const ClientCoordinateX = Math.round(e.clientX - ParentNodeRefRect.left - 12);

    const ClampedClientCoordinateY = Math.min(Math.max(ClientCoordinateY, 0), ParentNodeRefRect.height - 24);
    const ClampedClientCoordinateX = Math.min(Math.max(ClientCoordinateX, 0), ParentNodeRefRect.width - 24);

    const CoordinateYAxis = (ClampedClientCoordinateY / ParentNodeRefRect.height) * 100;
    const CoordinateXAxis = (ClampedClientCoordinateX / ParentNodeRefRect.width) * 100;

    return { top: CoordinateYAxis, left: CoordinateXAxis };
  }, [ParentRef]);

  const RepositionHotSpotDot = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (ActiveMode === HotSpotModes.REPOSITION && selectedDot !== null) {
        const coordinates = calculateCoordinates(e);
        const updatedDots = [...HotSpotDots];
        updatedDots[selectedDot].YCoordinates = coordinates.top;
        updatedDots[selectedDot].XCoordinates = coordinates.left;
  
        setHotSpotDots(updatedDots);
        setSelectedDot(null);
    }
  }, [ActiveMode, HotSpotDots, calculateCoordinates, selectedDot])

  const AddHotSpotDot = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (ActiveMode === HotSpotModes.EDIT) {
      const coordinates = calculateCoordinates(e);
      const NewHotSpotDot: IHotSpotDot = {
        ID: uuid(),
        YCoordinates: coordinates.top,
        XCoordinates: coordinates.left,
      };

      setHotSpotDots([...HotSpotDots, NewHotSpotDot]);
    }
  }, [ActiveMode, calculateCoordinates, HotSpotDots]);

  const RemoveDotHandler = useCallback((Hotspot: IHotSpotDot) => {
    if(ActiveMode === HotSpotModes.REMOVE && Hotspot) {
      const updatedDots = HotSpotDots.filter((h) => h.ID !== Hotspot.ID);
      setHotSpotDots(updatedDots);
      setSelectedDot(null);
      onHotspotRemoved?.(updatedDots);
    }
  }, [ActiveMode, HotSpotDots, onHotspotRemoved]);

  const HotSpotClickHandler = useCallback((e: React.MouseEvent<HTMLElement>, Hotspot: IHotSpotDot) => {
    e.stopPropagation();
    if (Hotspot) {
      setSelectedDot(HotSpotDots.findIndex((h) => h.ID === Hotspot.ID));
      onHotspotClick?.(Hotspot);
      RemoveDotHandler(Hotspot);
    } 
  }, [HotSpotDots, onHotspotClick, RemoveDotHandler]);

  return {
    HotSpotDots,
    AddHotSpotDot,
    HotSpotClickHandler,
    RemoveDotHandler,
    RepositionHotSpotDot,
  };
};

