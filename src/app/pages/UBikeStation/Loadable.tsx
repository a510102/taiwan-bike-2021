import { lazyLoad } from "../../../utils/loadable";

export const UBikeStation = lazyLoad(
	() => import('.'),
)