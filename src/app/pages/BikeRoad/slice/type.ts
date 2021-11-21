export interface BikeRoadType {
	RouteName: string;
	City: string;
	Town: string;
	Direction: string;
	CyclingLength: number;
	Geometry: string;
}

export interface BikeRoadStore {
	isFetching: boolean;
	error: any;
	bikeRoad: BikeRoadType[];
	city: string;
}