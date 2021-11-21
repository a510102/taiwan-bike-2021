import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'; 

import { getBikeRoad } from "./slice";
import { selectBikeRoads, selectCity, selectIsFetching } from "./slice/selector";
import { useAppDispatch, useAppSelector } from "../../../helpers";
import { BikeRoadLayout } from "./components/BikeRoadLayout";
import { BikeRoadList } from "./feature/BikeRoadList";
import { BikeRoadMap } from "./feature/BikeRoadMap";

export default function BikeRoad() {
	const dispatch = useAppDispatch();
	const bikeRoadList = useAppSelector(selectBikeRoads);
	const selectedCity = useAppSelector(selectCity);
	const isFetching = useAppSelector(selectIsFetching);
	useEffect(() => {
		if (selectedCity) {
			dispatch(getBikeRoad({ city: selectedCity }));
		}
	}, [selectedCity, dispatch]);

	return (
		<Routes>
			<Route path="/" element={<BikeRoadLayout bikeRoadList={bikeRoadList} />}>
				<Route index element={<BikeRoadList bikeRoadList={bikeRoadList} isFetching={isFetching} />} />
				<Route path=":id" element={<BikeRoadMap bikeRoadList={bikeRoadList} />} />
			</Route>
		</Routes>
	);
}