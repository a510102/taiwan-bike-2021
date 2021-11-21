import { useState, useEffect, useCallback } from 'react';

import { Navigation } from '../../components/Navigation';
import { Map } from '../../components/Map';
import { MapContainer } from '../../components/MapContainer';
import { BikeStation, Gps } from '../../components/MapIcon';
import { BikeSelector } from './components/BikeSelector';
import { GetPosition } from '../../components/GetPosition';
import { BikeSearch } from './components/BikeSearch';
import {
	useAppDispatch,
	useAppSelector,
	useMedia,
} from '../../../helpers';
import {
	getBikeAvailability,
	getBikeStation,
	setFilterPostion,
	resetFilterPostion,
} from './slice';
import { 
	selectUBikeStation,
	selectUBikeAvailability,
	selectIsFetching,
	selectError,
	selectFilterPosition,
} from './slice/selector';
import { useCountDown, useGlobalParameter } from '../../../helpers';
import { Loading } from '../../components/Loading';

export default function UBikeStation() {
	const dispatch = useAppDispatch();
	const bikeStations = useAppSelector(selectUBikeStation);
	const bikeAvailabilities = useAppSelector(selectUBikeAvailability);
	const bikeIsFetching = useAppSelector(selectIsFetching);
	const filterPostion = useAppSelector(selectFilterPosition);
	const { position: { lat, lng } } = useGlobalParameter();
	const { countDownTime, startCountDown, stopCountDown } = useCountDown(30);
	const { isMobile, isPad } = useMedia();
	const [isRent, setIsRent] = useState<boolean>(true);

	const toggleIsRent: () => void = () => setIsRent(preIsRent => !preIsRent)

	const handleGetBikeStation: (lat:　number, lng: number) => void = useCallback((lat, lng) => {
		dispatch(getBikeStation({ lat, lng }));
	}, [dispatch]);

	const handleGetBikeAvailability: (lat:　number, lng: number) => void = useCallback((lat, lng) => {
		dispatch(getBikeAvailability({ lat, lng }));
	}, [dispatch]);

	const handleChangeFilter: (lat: number, lng: number) => void = (lat, lng) => {
		dispatch(setFilterPostion({lat, lng}));
	};

	useEffect(() => {
		handleGetBikeAvailability(lat,lng);
		handleGetBikeStation(lat, lng);
	}, [lat, lng]);

	useEffect(() => {
		if (bikeStations.length > 0) {
			startCountDown();
		}
		return () => {
			stopCountDown();
		}
	}, [bikeStations]);

	useEffect(() => {
		if (countDownTime === 0) {
			handleGetBikeAvailability(lat,lng);
			handleGetBikeStation(lat, lng);
			startCountDown();
		}
	}, [countDownTime, lat, lng]);

	useEffect(() => {

		return () => {
			if (filterPostion) {
				dispatch(resetFilterPostion());
			}
		}
	}, [filterPostion]);

	return (
		<main className="bike-station">
			<Navigation>
				{(!isMobile && !isPad) && (
					<BikeSelector
						isRent={isRent}
						handleChange={toggleIsRent}
					/>
				)}
			</Navigation>
			{bikeIsFetching && bikeStations.length === 0 ? (
				<Loading /> ) : (
				<MapContainer>
					<GetPosition />
					<BikeSearch
						bikeList={bikeStations}
						handleChangeFilter={handleChangeFilter}
					/>
					<Map
						center={{lat, lng}}
						filterPostion={filterPostion}
						height={(isMobile || isPad) ? "calc(100vh - 120px)" : undefined}
					>
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
						<Gps position={{lat, lng}} />
					</Map>
				</MapContainer>
			)}
			{(isMobile || isPad) && (
				<BikeSelector
					isRent={isRent}
					handleChange={toggleIsRent} 
				/>
			)}
		</main>
	);
}