export type TourDefaultType = {
  ID: string;
  Name: string;
  Description: string;
  Phone: string;
  Address: string;
  Picture: {
    PictureUrl1: string;
  };
  Position: {
    PositionLon: number;
    PositionLat: number;
  };
}

export interface ScenicSpot extends TourDefaultType {
  DescriptionDetail: string;
}

export interface ScrenicSpotAndFoodStore {
  scenicSpots: ScenicSpot[];
  foods: TourDefaultType[],
  isFetching: boolean;
  error: any;
  isScenicSpot: boolean;
}