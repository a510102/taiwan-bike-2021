import rentBike from '../../../../../images/icon/rent-bike.png';
import rentBikeActive from '../../../../../images/icon/rent-bike-active.png';
import returnBike from '../../../../../images/icon/return-bike.png';
import returnBikeActive from '../../../../../images/icon/return-bike-active.png';

interface Props {
	handleChange: () => void;
	isRent: boolean;
}

export function BikeSelector(props: Props) {
	const { isRent, handleChange } = props;

	return (
		<div className="bike-selector">
			<div 
				className={`select-item ${isRent && 'active'}`}
				onClick={isRent ? () => null :  handleChange}
			>
				<img src={isRent ? rentBikeActive : rentBike} alt="rent icon" />
				<span>租車</span>
			</div>
			<div
				className={`select-item ${!isRent && 'active'}`}
				onClick={isRent ? handleChange : () => null}
			>
				<img src={isRent ? returnBike : returnBikeActive} alt="return icon" />
				<span>還車</span>
			</div>
		</div>
	);
}
