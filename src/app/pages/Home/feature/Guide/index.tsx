import { Link } from 'react-router-dom';


export function Guide() {
	return (
		<div className="guide">
			<Link className="guide-link" to='bikeStop'>尋找  Youbike</Link>
			<Link className="guide-link" to='bikeRoad'>查詢自行車道</Link>
			<Link className="guide-link" to='scenicSpotAndFood'>附近景點、美食</Link>
		</div>
	);
}