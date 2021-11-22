import { FC } from 'react';
import { Marker, Circle } from 'react-leaflet'
import L from 'leaflet';

import { Postion } from '../../../types';

import bikeStationIcon from '../../../images/icon/bike-station.png';
import bikeStationReturnIcon from '../../../images/icon/bike-station-return.png';
import locationIcon from '../../../images/icon/location.png';
import bikeStartIcon from '../../../images/icon/bike-road-start.png';
import bikeEndIcon from '../../../images/icon/bike-road-end.png';
import bikeStationZero from '../../../images/icon/zero.png';

interface BikeStationProps extends Postion {
	bikeNumber: number;
	isRent: boolean;
};

export const BikeStation: FC<BikeStationProps> = ({
	bikeNumber, 
	position: {lat, lng},
	isRent,
}) => {
	const bikeStation = L.icon({
		iconUrl: bikeNumber === 0 ? bikeStationZero : isRent ? bikeStationIcon : bikeStationReturnIcon,
		iconSize: [36, 50],
	});
	const bikeContent = L.divIcon({
		html: bikeNumber.toString(),
		className: isRent ? 'bike-number' : 'bike-number return',
		iconSize: [36, 50],
	});
	
	return (
		<>
			<Marker 
				icon={bikeStation} 
				position={[lat, lng]}
			/>
			<Marker 
				icon={bikeContent} 
				position={[lat, lng]}
			/>
		</>
	);
};

export const TourStop: FC<Postion> = ({
	position: {
		lat,
		lng,
	},
}) => {
	const tourStopIcon = L.icon({
		iconUrl: locationIcon,
		iconSize: [60, 60],
	});

	return (
		<Marker
			icon={tourStopIcon}
			position={[lat, lng]}
		/>
	);
};

export const BikeRoadStart: FC<Postion> = ({
	position: {
		lat,
		lng,
	},
}) => {
	const Icon = L.icon({
		iconUrl: bikeStartIcon,
		iconSize: [36, 50],
	});

	return (
		<Marker
			icon={Icon}
			position={[lat, lng]}
		/>
	);
};

export const BikeRoadEnd: FC<Postion> = ({
	position: {
		lat,
		lng,
	},
}) => {
	const Icon = L.icon({
		iconUrl: bikeEndIcon,
		iconSize: [36, 50],
	});

	return (
		<Marker
			icon={Icon}
			position={[lat, lng]}
		/>
	);
};

export const Gps: FC<Postion> = ({
	position: {
		lat,
		lng,
	},
}) => {
	return (
		<Circle
			center={{lat, lng}} 
			pathOptions={{ fillColor: 'black' }}
			radius={50}
		/>
	);
};
