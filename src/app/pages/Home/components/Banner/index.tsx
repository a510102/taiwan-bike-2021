import bikeIcon from '../../../../../images/home/Rectangle.png';
import titleIcon from '../../../../../images/home/Logo-bike1.png';

export function Banner() {
	const bannerHint: string[] = '微 笑 單 車 ． 暢 遊 城 市'.split(' ');
	return (
		<div className="banner">
			<img src={bikeIcon} alt="bike logo icon" />
			<img src={titleIcon} alt="where Y bike" />
			<p>{bannerHint.map(hint => (
				<span>{hint}</span>
			))}</p>
		</div>
	);
};