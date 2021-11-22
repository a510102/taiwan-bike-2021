import { Outlet, useParams, useMatch } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../../helpers";
import { changeCity } from "../../slice";
import { selectCity } from '../../slice/selector';
import { Navigation } from "../../../../components/Navigation";
import { Select } from "../../../../components/Select";
import cityList from '../../../../../localData/city.json';
import { BikeRoadType } from "../../slice/type";

interface Props {
  bikeRoadList: BikeRoadType[];
}

export function BikeRoadLayout(props: Props) {
  const { bikeRoadList } = props;
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(selectCity);
  const isMatchBikeRoad = useMatch('/bikeRoad');
  const { id } = useParams();
  const formatCityList = cityList.map(city => (
    {
      name: city.CityName,
      value: city.City,
    }
  ));

  const handleChangeCity: (value: string) => void = value => {
    if (value === selectedCity) {
      return;
    }
    dispatch(changeCity({city: value}));
  }

  const currentBikeRoad = bikeRoadList
    .find((bikeRoad, index) => index === Number(id));

  return (
    <main className="bike-road">
      <Navigation>
        {isMatchBikeRoad 
          ? <Select 
              list={formatCityList} 
              handleOnChange={handleChangeCity} 
              hint="選擇縣市" 
            /> 
          : currentBikeRoad && <p>{currentBikeRoad.RouteName}</p>}
      </Navigation>
      <Outlet />
    </main>
  );
}