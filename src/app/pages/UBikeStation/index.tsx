import { Routes, Route } from 'react-router-dom';

import { Layout } from "./components/layout";
import { Navigation } from '../../components/Navigation';

export default function UBikeStation() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index />
				<Route path=":city" />
			</Route>
		</Routes>
	);
}