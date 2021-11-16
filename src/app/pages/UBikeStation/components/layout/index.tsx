import { Outlet } from "react-router";
import { Navigation } from "../../../../components/Navigation";

export function Layout() {
	return (
		<main className="u-bike-station">
			<Navigation></Navigation>
			<Outlet />
		</main>
	);
}