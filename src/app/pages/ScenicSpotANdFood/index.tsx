import { Routes, Route } from 'react-router-dom';

import { ScenicFoodLayout } from './components/ScenicFoodLayout';
import { ScenicFoodList } from './feature/ScenicFoodList';
import { ScenicFoodDetail } from './feature/ScenicFoodDetail';
import { useAppSelector } from '../../../helpers';
import { 
	selectScenicSpots,
	selectFoods,
	selectIsScenicSpot,
	selectIsFetching,
} from './slice/selector';

export default function ScenicSpotAndFood() {
	const foods = useAppSelector(selectFoods);
  const scenicSpots = useAppSelector(selectScenicSpots);
  const isScenicSpot = useAppSelector(selectIsScenicSpot);
	const isFetching = useAppSelector(selectIsFetching);

	return (
		<Routes>
			<Route path="/" element={<ScenicFoodLayout />}>
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
					path=":name" 
					element={
						<ScenicFoodDetail
							scenicSpots={scenicSpots}
							foods={foods}
							isScenicSpot={isScenicSpot}
						/>
					}
				/>
				<Route path=":name/map" />
			</Route>
		</Routes>
	);
}