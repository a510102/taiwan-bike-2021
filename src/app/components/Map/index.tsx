import { ReactNode } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

import bikeIcon from '../../../images/icon/bike.png';

import "leaflet/dist/leaflet.css";

interface Props {
	children: ReactNode;
	center: {
		lat: number;
		lng: number;
	}
}

export function Map (props: Props) {
	const { children, center: {lat, lng} } = props;
	return (
		<MapContainer 
			style={{ height: "calc(100vh - 64px)", width: "100%" }} 
			center={[lat, lng]} 
			zoom={18}
			maxZoom={18}
			minZoom={15}
		>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		{children}
	</MapContainer>
	)
}

const iconPerson = new L.Icon({
  iconUrl: bikeIcon,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
