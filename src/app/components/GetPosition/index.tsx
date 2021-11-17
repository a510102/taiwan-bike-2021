import { useAppDispatch } from '../../../helpers';
import { changePosition } from '../../../store/globalStore';

import { useGlobalParameter } from '../../../helpers';

import gpsIcon from '../../../images/icon/GPS.png';

export function GetPosition() {
	const dispatch = useAppDispatch()
	const { position: {lat, lng} } = useGlobalParameter();
	const handleGetPosition = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { coords: { latitude, longitude } } = position;
				if (lat !== latitude || lng !== longitude) {
					dispatch(changePosition({lat: latitude, lng: longitude}));
				}
			});
		} else {
			alert("Unable to retrieve your location");
		}
	}
	
	return (
		<button className="get-position-btn" onClick={handleGetPosition}>
			<img src={gpsIcon} alt="gps icon" />
		</button>
	);
}