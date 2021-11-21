import { useState, ChangeEvent } from 'react';

import searchIcon from '../../../../../images/icon/search.png';
import { BikeStation } from '../../slice/type';

interface Props {
  bikeList: BikeStation[];
  handleChangeFilter: (lat: number, lng: number) => void;
}

export function BikeSearch(props: Props) {
  const { bikeList, handleChangeFilter } = props;
  const [searchValue, setSearchValue] = useState<string>('');
  const [error, setError] = useState<string>(''); 

  const handleChangValue: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    const { value } = e.target;
    setSearchValue(value);
  }

  const handleSearch: () => void = () => {
    const filterBikeStation = bikeList
      .find(item => item.StationName.Zh_tw.includes(searchValue));
    if (filterBikeStation) {
      const { PositionLat, PositionLon } = filterBikeStation.StationPosition;
      handleChangeFilter(PositionLat, PositionLon);
    } else {
      setError('附近站點未符合，請再次搜尋');
    }
    setSearchValue('');
  };

  return (
    <div className="search">
      <input
        className="search-input"
        value={searchValue} 
        onChange={handleChangValue} 
        placeholder="尋找站點" 
      />
      <button className="search-btn" onClick={handleSearch}>
        <img src={searchIcon} alt="search icon" />
      </button>
    </div>
  );
};