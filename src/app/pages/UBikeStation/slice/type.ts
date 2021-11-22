import { Postion } from "../../../../types"

export type BikeType = {
	StationUID: string;
	StationID: string;
}

export interface BikeStation extends BikeType {
	StationName: {
		Zh_tw: string;
	};
	StationPosition: {
		PositionLon: number;
		PositionLat: number;
	};
	BikesCapacity: number;
}

export interface BikeAvailability extends BikeType {
	ServiceStatus: number;
	AvailableRentBikes: number;
	AvailableReturnBikes: number;
}

export interface UBikeStopStore {
	isFetching: boolean;
	error: any;
	bikeStation: BikeStation[];
	bikeAvailability: BikeAvailability[];
	postion: {
		lat: number;
		lng: number;
	};
	filterPosition?: {
		lat: number;
		lng: number;
	};
}