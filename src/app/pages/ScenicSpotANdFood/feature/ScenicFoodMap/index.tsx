import { TourStop } from '../../../../components/MapIcon';
import { MapContainer } from '../../../../components/MapContainer';
import { Map } from '../../../../components/Map';
import { ScenicSpot, TourDefaultType } from "../../slice/type";

interface Props {
  detail: ScenicSpot | TourDefaultType | undefined;
}

export function ScenicFoodMap(props: Props) {
  const { detail } = props;
  const center = {
    lat: detail?.Position.PositionLat || 0,
    lng: detail?.Position.PositionLon || 0,
  }
  return (
    <>
      {detail && (
        <MapContainer>
          <Map center={center}>
            <TourStop
              position={center}
            />
          </Map>
        </MapContainer>
      )}
    </>
  );
}