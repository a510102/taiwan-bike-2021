import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

import bikeIcon from '../../../images/icon/bike.png';

import "leaflet/dist/leaflet.css";

export function Map () {
	return (
		<MapContainer style={{ height: "450px", width: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={[51.505, -0.09]} icon={iconPerson}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker>
		{/* <Polyline pathOptions={} /> */}
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
