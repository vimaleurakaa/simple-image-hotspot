import { AttachmentTypes, IHotSpotDot } from "./HotSpotModels";

export const PERCENT_UNIT = '%';

export const MockDots : IHotSpotDot[] = [
  {
    ID: "1d576045-60f6-4fde-ac1d-d0bbe2dcae17",
    YCoordinates: 21.96102039280608,
    XCoordinates: 25.628117706283465,
    ReferenceID: null,
    AttachmentType: AttachmentTypes.IMAGE,
    Color: `#${Math.floor(Math.random()*16777215).toString(16)}`
  },
  {
    ID: "b9f477dc-77bf-4532-876b-2aca2d4fe994",
    YCoordinates: 71.08435548197758,
    XCoordinates: 29.875062926181865,
    ReferenceID: null,
    AttachmentType: AttachmentTypes.IMAGE,
    Color: `#${Math.floor(Math.random()*16777215).toString(16)}`
  },
  {
    ID: "19d5895a-ab46-49a3-a624-3200a430aaab",
    YCoordinates: 10.40258860711867,
    XCoordinates: 49.79177154363645,
    ReferenceID: null,
    AttachmentType: AttachmentTypes.IMAGE,
    Color: `#${Math.floor(Math.random()*16777215).toString(16)}`
  },
  {
    ID: "ab68e3a9-b95f-48f5-92f0-0762aba59477",
    YCoordinates: 27.932876815411245,
    XCoordinates: 93.13990206397877,
    ReferenceID: null,
    AttachmentType: AttachmentTypes.IMAGE,
    Color: `#${Math.floor(Math.random()*16777215).toString(16)}`
  },
];