import { FC } from 'react';
import { Marker } from 'react-leaflet'
import L from 'leaflet';

import bikeStationIcon from '../../../images/icon/bike-station.png';
import bikeStationReturnIcon from '../../../images/icon/bike-station-return.png';
import locationIcon from '../../../images/icon/location.png';

interface BikeStationProps {
	bikeNumber: number;
	position: {
		lat: number;
		lng: number;
	};
	isRent: boolean;
};

export const BikeStation: FC<BikeStationProps> = ({
	bikeNumber, 
	position: {lat, lng},
	isRent,
}) => {
	const bikeStation = L.icon({
		iconUrl: isRent ? bikeStationIcon : bikeStationReturnIcon,
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

interface TourStopProps {
	address: string;
	position: {
		lat: number;
		lng: number;
	};
};

export const TourStop: FC<TourStopProps> = ({
	address,
	position: {
		lat,
		lng,
	},
}) => {
	const tourStopIcon = L.icon({
		iconUrl: locationIcon,
		iconSize: [24, 24],
	});
	const tourStopContent = L.divIcon({
		html: address || '',
		className: 'tour-stop-icon-content',
		iconSize: [48, 100],
	});
	return (
		<>
			<Marker
				icon={tourStopIcon}
				position={[lat, lng]}
			/>
			<Marker
				icon={tourStopContent}
				position={[lat, lng]}
			/>
		</>
	);
}