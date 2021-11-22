import { useAppDispatch, useAppSelector } from "../../../../../helpers";
import { toggleIsScenicSpot } from '../../slice';
import { selectIsScenicSpot } from '../../slice/selector';

import ScenicSpotIcon from '../../../../../images/icon/scenicSpot.png';
import ScenicSpotActiveIcon from '../../../../../images/icon/scenicSpot-active.png';
import FoodIcon from '../../../../../images/icon/food.png';
import FoodActiveIcon from '../../../../../images/icon/food-active.png';


export function TypeSelector() {
  const dispatch = useAppDispatch();
  const isScenicSpot = useAppSelector(selectIsScenicSpot);
  const handleChange: () => void = () => {
    dispatch(toggleIsScenicSpot());
  }

  return (
    <div className="bike-selector">
			<div 
				className={`select-item ${isScenicSpot && 'active'}`}
				onClick={isScenicSpot ? () => null :  handleChange}
			>
				<img src={isScenicSpot ? ScenicSpotActiveIcon : ScenicSpotIcon} alt="rent icon" />
				<span>景點</span>
			</div>
			<div
				className={`select-item ${!isScenicSpot && 'active'}`}
				onClick={isScenicSpot ? handleChange : () => null}
			>
				<img src={isScenicSpot ? FoodIcon : FoodActiveIcon} alt="return icon" />
				<span>美食</span>
			</div>
		</div>
  )
};
