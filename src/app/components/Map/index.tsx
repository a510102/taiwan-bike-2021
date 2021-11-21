import { ReactNode, useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import "leaflet/dist/leaflet.css";

interface Props {
	children: ReactNode;
	center: {
		lat: number;
		lng: number;
	};
	filterPostion?: {
		lat: number;
		lng: number;
	};
	height?: string; 
}

export function Map (props: Props) {
	const {
		children, 
		center: {lat, lng},
		filterPostion,
		height = "calc(100vh - 64px)",
	} = props;
	const mapRef = useRef<any>();

	useEffect(() => {
		if (filterPostion && mapRef) {
			const latLng = L.latLng(filterPostion.lat, filterPostion.lng);
			mapRef.current.setView(latLng, 16);
		}
	}, [filterPostion, mapRef]);

	return (
		<MapContainer
			style={{ height: height , width: "100%" }} 
			center={[lat, lng]} 
			zoom={16}
			maxZoom={18}
			minZoom={15}
			whenCreated={(map: any) => mapRef.current = map}
		>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		{children}
	</MapContainer>
	)
};
