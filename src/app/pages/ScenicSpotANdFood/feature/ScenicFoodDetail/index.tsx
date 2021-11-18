import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
  const { id } = useParams();
  const {
    scenicSpots,
    foods,
    isScenicSpot,
  } = props;

  const currentDetail = (isScenicSpot ? scenicSpots : foods)
    .find(item => item.ID === id);
  
  return (
    <div className="scenic-foods-detail">
      <div className="detail-content">
        <div className="detail-img">
          <img src={currentDetail?.Picture.PictureUrl1} alt="pic" />
        </div>
        <div className="detail-other-info">
          <p className="detail-info"><img src={timeIcon} />{currentDetail?.OpenTime}</p>
          <p className="detail-info"><img src={phoneIcon} />{currentDetail?.Phone}</p>
          <p className="detail-info map"><img src={mapIcon} />{currentDetail?.Address}<Link className="map-btn" to="map">地圖</Link></p>
          <p className="detail-detail">{currentDetail?.Description}</p>
        </div>
      </div>
    </div>
  )
}