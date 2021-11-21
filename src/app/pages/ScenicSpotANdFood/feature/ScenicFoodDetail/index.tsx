import { useParams, Route, Routes, } from "react-router-dom";

import { ScenicSpot, TourDefaultType } from "../../slice/type";

import { ScenicFoodDetailContnet } from "../ScenicFoodDetailContent";
import { ScenicFoodMap } from "../ScenicFoodMap";

interface Props {
  scenicSpots: ScenicSpot[];
  foods: TourDefaultType[];
  isScenicSpot: boolean;
}

export function ScenicFoodDetail(props: Props) {
  const { id } = useParams();
  const {
    scenicSpots,
    foods,
    isScenicSpot,
  } = props;

  const currentDetail = (isScenicSpot ? scenicSpots : foods)
    .find(item => item.ID === id);
  
  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index  
            element={
              <ScenicFoodDetailContnet 
                detail={currentDetail}
              />
            }
          />
          <Route 
            path="map"
            element={
              <ScenicFoodMap 
                detail={currentDetail}
              />
            }
          />
        </Route>
      </Routes>
    </>
  )
}