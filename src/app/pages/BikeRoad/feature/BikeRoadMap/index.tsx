import { useParams } from 'react-router-dom';
import { Polyline } from 'react-leaflet';

import { MapContainer } from "../../../../components/MapContainer";
import { Map } from "../../../../components/Map";
import { BikeRoadType } from '../../slice/type';
import { BikeRoadEnd, BikeRoadStart } from '../../../../components/MapIcon';

interface Props {
  bikeRoadList: BikeRoadType[];
}

export function BikeRoadMap(props: Props) {
  const { id } = useParams();
  const { bikeRoadList } = props;
  const currentBikeRoad = bikeRoadList
    .find((bikeRoad, index) => index === Number(id));
  const roadPosition: any[][] = currentBikeRoad ? currentBikeRoad.Geometry
    .replace('MULTILINESTRING ((', '')
    .replace('))', '')
    .replaceAll(')', '')
    .replaceAll('(', '')
    .split(',')
    .map(item => item.split(' ').reverse().map(item => Number(item))) : [];
	const balckOption = {color: 'black'};

  return (
    <>
      {roadPosition.length > 0 && (
        <MapContainer>
          <Map center={{lat: roadPosition[0][0], lng: roadPosition[0][1]}}>
            <Polyline
              pathOptions={balckOption}
              positions={roadPosition}
            />
            <BikeRoadStart 
              position={{
                lat: roadPosition[0][0],
                lng: roadPosition[0][1],
              }}
            />
            <BikeRoadEnd
              position={{
                lat: roadPosition[roadPosition.length - 1][0],
                lng: roadPosition[roadPosition.length - 1][1],
              }}
            />
          </Map>
        </MapContainer>
      )}
    </>
  );
};
