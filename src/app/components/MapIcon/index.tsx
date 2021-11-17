import { FC } from 'react';
import { Marker } from 'react-leaflet'
import L from 'leaflet';

import bikeStationIcon from '../../../images/icon/bike-station.png';
import bikeStationReturnIcon from '../../../images/icon/bike-station-return.png';

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
	})
	
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