import { useMedia } from '../../../../../helpers';

import rentBike from '../../../../../images/icon/rent-bike.png';
import rentBikeActive from '../../../../../images/icon/rent-bike-active.png';
import rentBikeActiveWhite from '../../../../../images/icon/bike-white.png';
import returnBike from '../../../../../images/icon/return-bike.png';
import returnBikeActive from '../../../../../images/icon/return-bike-active.png';
import returnBikeActiveWhite from '../../../../../images/icon/parking-white.png';

interface Props {
	handleChange: () => void;
	isRent: boolean;
}

export function BikeSelector(props: Props) {
	const { isRent, handleChange } = props;
	const { isMobile, isPad } = useMedia();

	return (
		<div className="bike-selector">
			<div 
				className={`select-item ${isRent && 'active'}`}
				onClick={isRent ? () => null :  handleChange}
			>
				<img src={
					isRent 
						? (isMobile || isPad) 
							? rentBikeActiveWhite 
							: rentBikeActive 
						: rentBike
					} alt="rent icon" />
				<span>租車</span>
			</div>
			<div
				className={`select-item ${!isRent && 'active'}`}
				onClick={isRent ? handleChange : () => null}
			>
				<img src={
					isRent 
						? returnBike 
						: (isMobile || isPad) 
							? returnBikeActiveWhite 
							: returnBikeActive
					} alt="return icon" />
				<span>還車</span>
			</div>
		</div>
	);
}
