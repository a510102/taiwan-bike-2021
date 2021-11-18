import { useParams } from "react-router";

import { ScenicSpot, TourDefaultType } from "../../slice/type";

import phoneIcon from '../../../../../images/icon/tel.png';
import mapIcon from '../../../../../images/icon/location.png';
import timeIcon from '../../../../../images/icon/time.png';

interface Props {
  scenicSpots: ScenicSpot[];
  foods: TourDefaultType[];
  isScenicSpot: boolean;
}

export function ScenicFoodDetail(props: Props) {
  const { name } = useParams();
  const {
    scenicSpots,
    foods,
    isScenicSpot,
  } = props;

  const currentDetail = (isScenicSpot ? scenicSpots : foods)
    .find(item => item.ID === name);
  
  return (
    <div className="scenic-foods-detail">
      <div className="detail-img">
        <img src={currentDetail?.Picture.PictureUrl1} alt="pic" />
      </div>
    </div>
  )
}