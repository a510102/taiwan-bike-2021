import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAppDispatch,
  useAppSelector,
  useGlobalParameter,
  distance,
} from '../../../../../helpers';
import { getScrenicFood, getScrenicSpot } from '../../slice';
import { 
  selectIsScenicSpot,
  selectFoods,
  selectScenicSpots,
  selectIsFetching,
} from '../../slice/selector';

import phoneIcon from '../../../../../images/icon/tel.png';
export function ScenicFoodList() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const isScenicSpot = useAppSelector(selectIsScenicSpot);
  const foods = useAppSelector(selectFoods);
  const scenicSpots = useAppSelector(selectScenicSpots);
  const { position: { lat, lng } } = useGlobalParameter();
  const [currentPosition, setCurrentPosition] = useState<{lat: number; lng: number;} | null>(null);

  useEffect(() => {
    dispatch(getScrenicSpot({ lat, lng }));
    dispatch(getScrenicFood({ lat, lng }));
  }, [lat, lng, dispatch]);

  return (
    <div className="scenic-food-wrap">
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
    </div>
  );
}