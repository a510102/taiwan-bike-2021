import { RootState } from "../../../../store";

export const selectScenicSpots = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.scenicSpots;
export const selectFoods = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.foods;
export const selectIsFetching = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.isFetching;
export const selectError = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.error;
export const selectIsScenicSpot = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.isScenicSpot;
export const selectPosition = ({ screnicSpotAndFood }: RootState) => screnicSpotAndFood.position;
