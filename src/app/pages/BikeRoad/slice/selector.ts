import { RootState } from "../../../../store";

export const selectBikeRoads = ({ bikeRoad }: RootState) => bikeRoad.bikeRoad;
export const selectCity = ({ bikeRoad }: RootState) => bikeRoad.city;
export const selectIsFetching = ({ bikeRoad }: RootState) => bikeRoad.isFetching;
export const selectError = ({ bikeRoad }: RootState) => bikeRoad.error;
