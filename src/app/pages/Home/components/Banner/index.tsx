import { Bike } from '../../../../components/AnimationIcon';

import titleIcon from '../../../../../images/home/Logo-bike1.png';

export function Banner() {
	const bannerHint: string[] = '微 笑 單 車 ． 暢 遊 城 市'.split(' ');
	return (
		<div className="banner">
			<Bike width="119px" height="75px" />
			<img src={titleIcon} alt="where Y bike" />
			<p>{bannerHint.map((hint, index) => (
				<span key={index}>{hint}</span>
			))}</p>
		</div>
	);
};