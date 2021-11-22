import { Link } from "react-router-dom";

import { ScenicSpot, TourDefaultType } from "../../slice/type";
import { useMedia } from "../../../../../helpers";

import phoneIcon from '../../../../../images/icon/tel.png';
import mapIcon from '../../../../../images/icon/location.png';
import timeIcon from '../../../../../images/icon/time.png';
import noImg from '../../../../../images/no-img/deatil-no-img.png';
import noImgMobile from '../../../../../images/no-img/deatil-no-img-mobile.png';

interface Props {
  detail: ScenicSpot | TourDefaultType | undefined;
}

export function ScenicFoodDetailContnet(props: Props) {
  const { detail } = props;
  const { isMobile } = useMedia();
  
  return (
    <div className="scenic-foods-detail">
      <div className="detail-content">
        <div className="detail-img">
          <img src={detail?.Picture.PictureUrl1 || isMobile ? noImgMobile : noImgMobile} alt="pic" />
        </div>
        <div className="detail-other-info">
          <p className="detail-info"><img src={timeIcon} alt="time icon" />{detail?.OpenTime}</p>
          <p className="detail-info"><img src={phoneIcon} alt="tel icon" />{detail?.Phone}</p>
          <p className="detail-info map"><img src={mapIcon} alt="map icon" />{detail?.Address}<Link className="map-btn" to="map">地圖</Link></p>
          <p className="detail-detail">{detail?.Description}</p>
        </div>
      </div>
    </div>
  );
}