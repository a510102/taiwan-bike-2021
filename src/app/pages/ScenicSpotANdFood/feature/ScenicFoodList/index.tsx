import { useNavigate } from 'react-router-dom';

import {
  useGlobalParameter,
  distance,
} from '../../../../../helpers';
import { TourDefaultType, ScenicSpot } from '../../slice/type';

import phoneIcon from '../../../../../images/icon/tel.png';
import { Loading } from '../../../../components/Loading';
import { GetPosition } from '../../../../components/GetPosition';

interface Props {
  scenicSpots: ScenicSpot[];
  foods: TourDefaultType[];
  isScenicSpot: boolean;
  isFetching: boolean;
};

export function ScenicFoodList(props: Props) {
  const navigation = useNavigate();
  const { scenicSpots, foods, isScenicSpot, isFetching } = props;
  const { position: { lat, lng } } = useGlobalParameter();

  return (
    <>
      {isFetching ? (
        <Loading /> ) : (
        <div className="scenic-food-wrap">
          <div className="scenic-food-list">
            {
              (isScenicSpot ? scenicSpots : foods).map((item, index) => (
                <div className="list-item" key={index} onClick={() => navigation(`${item.ID}`)}>
                  <div className="item-img">
                    {item.Picture.PictureUrl1 && <img src={item.Picture.PictureUrl1} alt="pic" />}
                  </div>
                  <div className="item-content">
                    <p className="item-distance">{distance(lat, lng, item.Position.PositionLat, item.Position.PositionLon)}</p>
                    <p className="item-title">{item.Name}</p>
                    <p className="item-phone"><img src={phoneIcon} alt="phone" />{item.Phone}</p>
                  </div>
                </div>
              ))
            }
            <GetPosition />
          </div>
        </div>
      )}
    </>
  );
}