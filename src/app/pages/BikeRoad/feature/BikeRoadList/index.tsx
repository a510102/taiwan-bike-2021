import { useNavigate } from 'react-router-dom';

import { BikeRoadType } from "../../slice/type";

import mapIcon from '../../../../../images/icon/location.png';
import { Loading } from '../../../../components/Loading';

interface Props {
  bikeRoadList: BikeRoadType[];
  isFetching: boolean;
}

export function BikeRoadList(props: Props) {
  const { bikeRoadList, isFetching } = props;
  const navigation = useNavigate();
  return (
    <div className="bike-road-list-wrap">
      {isFetching 
        ? <Loading /> 
        : bikeRoadList.length > 0 
          ? <div className="bike-road-list">
              {bikeRoadList.map((bikeRoad, index) => (
                <div className="list-item" key={index} onClick={() => navigation(`${index}`)}>
                  <p className="item-title">{bikeRoad.RouteName}</p>
                  <p className="item-distance">{bikeRoad.Direction ? `(${bikeRoad.Direction})` : ''} {bikeRoad.CyclingLength ? (bikeRoad.CyclingLength / 1000).toFixed(2) : '- -'} 公里</p>
                  <p className="item-map"><img src={mapIcon} alt="map icom" />{bikeRoad.City} {bikeRoad.Town}</p>
                </div>
              ))}
            </div> 
          : <p className="no-data">尚未選擇任何縣市</p>
      }
    </div>
  )
};