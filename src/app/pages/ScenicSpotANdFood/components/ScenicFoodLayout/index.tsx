import { Outlet, useMatch, useParams } from 'react-router-dom';
import { Navigation } from '../../../../components/Navigation';
import { ScenicSpot, TourDefaultType } from '../../slice/type';
import { TypeSelector } from '../TypeSelector';

interface Props {
  foods: TourDefaultType[];
  scenicSpots: ScenicSpot[];
  isScenicSpot: boolean;
}

export function ScenicFoodLayout(props: Props) {
  const {
    foods,
    scenicSpots,
    isScenicSpot,
  } = props;
  const isMatchScenicFood = useMatch('/scenicSpotAndFood');
  const { id } = useParams();
  const currtDetail = (isScenicSpot ? scenicSpots : foods)
    .find(detail => detail.ID === id);

  return (
    <main className="scenic-spot-food">
      <Navigation>
        {isMatchScenicFood ? <TypeSelector /> : <p>{currtDetail?.Name}</p>}
      </Navigation>
      <Outlet />
    </main>
  );
}