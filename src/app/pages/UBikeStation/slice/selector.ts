import { RootState } from "../../../../store";

export const selectUBikeStation = ({ bikeStation }: RootState) => bikeStation.bikeStation;
export const selectUBikeAvailability = ({ bikeStation }: RootState) => bikeStation.bikeAvailability;
export const selectIsFetching = ({ bikeStation }: RootState) => bikeStation.isFetching;
export const selectError = ({ bikeStation }: RootState) => bikeStation.error;
export const selectFilterPosition = ({ bikeStation }: RootState) => bikeStation.filterPosition;
