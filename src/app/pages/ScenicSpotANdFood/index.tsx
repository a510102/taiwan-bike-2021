import { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import { ScenicFoodLayout } from './components/ScenicFoodLayout';
import { ScenicFoodList } from './feature/ScenicFoodList';
import { ScenicFoodDetail } from './feature/ScenicFoodDetail';
import { useAppSelector, useAppDispatch, useGlobalParameter } from '../../../helpers';
import { getScrenicFood, getScrenicSpot } from './slice';
import { 
	selectScenicSpots,
	selectFoods,
	selectIsScenicSpot,
	selectIsFetching,
} from './slice/selector';

export default function ScenicSpotAndFood() {
  const dispatch = useAppDispatch();
	const foods = useAppSelector(selectFoods);
  const scenicSpots = useAppSelector(selectScenicSpots);
  const isScenicSpot = useAppSelector(selectIsScenicSpot);
	const isFetching = useAppSelector(selectIsFetching);
  const { position: { lat, lng } } = useGlobalParameter();
	const { name } = useParams();

	useEffect(() => {
    dispatch(getScrenicSpot({ lat, lng }));
    dispatch(getScrenicFood({ lat, lng }));
  }, [lat, lng, dispatch]);

	return (
		<Routes>
			<Route 
				path="/" 
				element={
					<ScenicFoodLayout
						foods={foods}
						scenicSpots={scenicSpots} 
						isScenicSpot={isScenicSpot}
					/>
				}
			>
				<Route 
					index 
					element={
						<ScenicFoodList
							foods={foods}
							scenicSpots={scenicSpots} 
							isScenicSpot={isScenicSpot}
							isFetching={isFetching}
						/>
					} 
				/>
				<Route
					path=":id" 
					element={
						<ScenicFoodDetail
							scenicSpots={scenicSpots}
							foods={foods}
							isScenicSpot={isScenicSpot}
						/>
					}
				/>
				<Route path=":id/map" />
			</Route>
		</Routes>
	);
}