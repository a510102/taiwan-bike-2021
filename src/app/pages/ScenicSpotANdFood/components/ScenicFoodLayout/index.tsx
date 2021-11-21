import { Outlet, useMatch, useParams } from 'react-router-dom';

import { Navigation } from '../../../../components/Navigation';
import { ScenicSpot, TourDefaultType } from '../../slice/type';
import { TypeSelector } from '../TypeSelector';
import { useMedia } from '../../../../../helpers';

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
  const { isMobile, isPad } = useMedia();
  const isMatchScenicFood = useMatch('/scenicSpotAndFood');
  const { id } = useParams();
  const currtDetail = (isScenicSpot ? scenicSpots : foods)
    .find(detail => detail.ID === id);

  return (
    <main className="scenic-spot-food">
      <Navigation>
        {isMatchScenicFood 
          ? (!isMobile && !isPad) && <TypeSelector /> 
          : <p>{currtDetail?.Name}</p>
        }
      </Navigation>
      <Outlet />
      {isMatchScenicFood && (isMobile || isPad) && <TypeSelector />}
    </main>
  );
}