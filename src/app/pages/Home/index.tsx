import { Helmet } from "react-helmet-async";

import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Guide } from "./feature/Guide";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>U Bike</title>
			</Helmet>
			<main className="home-page">
				<Banner />
				<Guide />
			</main>
			<Footer />
		</>
	)
}