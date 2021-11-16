import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Guide } from "./feature/Guide";

export default function Home() {
	return (
		<>
			<main className="home-page">
				<Banner />
				<Guide />
			</main>
			<Footer />
		</>
	)
}