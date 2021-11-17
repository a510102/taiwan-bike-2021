import { Routes, Route } from 'react-router-dom';

import { ScenicFoodLayout } from './components/ScenicFoodLayout';
import { ScenicFoodList } from './feature/ScenicFoodList';
import { ScenicFoodDetail } from './feature/ScenicFoodDetail';

export default function ScenicSpotAndFood() {
	return (
		<Routes>
			<Route path="/" element={<ScenicFoodLayout />}>
				<Route index element={<ScenicFoodList />} />
				<Route path=":name" element={<ScenicFoodDetail />} />
				<Route path=":name/map" />
			</Route>
		</Routes>
	);
}