import { RootState } from "..";

export const selectPosition = ({ global }: RootState) => global.position;