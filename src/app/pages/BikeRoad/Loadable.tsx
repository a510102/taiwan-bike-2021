import { lazyLoad } from "../../../utils/loadable";

export const BikeRoad = lazyLoad(
	() => import('.')
)