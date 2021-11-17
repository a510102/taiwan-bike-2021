import { Outlet, useMatch } from 'react-router-dom';
import { Navigation } from '../../../../components/Navigation';
import { TypeSelector } from '../TypeSelector';

export function ScenicFoodLayout() {
  const isMatchScenicFood = useMatch('/scenicSpotAndFood');

  return (
    <main className="scenic-spot-food">
      <Navigation>
        {isMatchScenicFood && <TypeSelector />}
      </Navigation>
      <Outlet />
    </main>
  );
}