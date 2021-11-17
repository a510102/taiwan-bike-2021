import { useState, useEffect, useCallback } from 'react';

import { Navigation } from '../../components/Navigation';
import { Map } from '../../components/Map';
import { MapContainer } from '../../components/MapContainer';
import { BikeStation } from '../../components/MapIcon';
import { BikeSelector } from './components/BikeSelector';
import { GetPosition } from '../../components/GetPosition';
import { useAppDispatch, useAppSelector } from '../../../helpers';
import { getBikeAvailability, getBikeStation } from './slice';
import { 
	selectUBikeStation,
	selectUBikeAvailability,
	selectIsFetching,
	selectError,
} from './slice/selector';
import { useCountDown, useGlobalParameter } from '../../../helpers';
import { Loading } from '../../components/Loading';

export default function UBikeStation() {
	const dispatch = useAppDispatch();
	const bikeStations = useAppSelector(selectUBikeStation);
	const bikeAvailabilities = useAppSelector(selectUBikeAvailability);
	const bikeIsFetching = useAppSelector(selectError);
	const { position: { lat, lng } } = useGlobalParameter();
	const { countDownTime, startCountDown, stopCountDown } = useCountDown(30);
	const [isRent, setIsRent] = useState<boolean>(true);

	const toggleIsRent: () => void = () => setIsRent(preIsRent => !preIsRent)

	const handleGetBikeStation: (lat:　number, lng: number) => void = useCallback((lat, lng) => {
		dispatch(getBikeStation({ lat, lng }));
	}, [dispatch]);

	const handleGetBikeAvailability: (lat:　number, lng: number) => void = useCallback((lat, lng) => {
		dispatch(getBikeAvailability({ lat, lng }));
	}, [dispatch]);

	useEffect(() => {
		handleGetBikeAvailability(lat,lng);
		handleGetBikeStation(lat, lng);
		startCountDown();

		return () => {
			stopCountDown();
		}
	}, [lat, lng]);

	useEffect(() => {
		if (countDownTime === 0) {
			handleGetBikeAvailability(lat,lng);
			handleGetBikeStation(lat, lng);
			startCountDown();
		}
	}, [countDownTime, lat, lng])

	return (
		<main className="bike-station">
			<Navigation>
				<BikeSelector
					isRent={isRent}
					handleChange={toggleIsRent}
				/>
			</Navigation>
			{bikeIsFetching ? (
				<Loading /> ) : (
				<MapContainer>
					<GetPosition />
					<Map center={{lat, lng}}>
						{
							bikeStations.map((bikeStation) => {
								const currentAvailability = bikeAvailabilities.find(availability => availability.StationUID === bikeStation.StationUID);
								const rentBikeNumber = currentAvailability?.AvailableRentBikes || 0;
								const returnBikeNumber = currentAvailability?.AvailableReturnBikes || 0;
								return (
									<BikeStation 
										key={bikeStation.StationID}
										bikeNumber={isRent ? rentBikeNumber : returnBikeNumber}
										position= {{lat: bikeStation.StationPosition.PositionLat , lng: bikeStation.StationPosition.PositionLon}}
										isRent={isRent}
									/>
								)
							})
						}
					</Map>
				</MapContainer>
			)}
		</main>
	);
}