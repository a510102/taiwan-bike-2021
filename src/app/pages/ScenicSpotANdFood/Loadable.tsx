import { lazyLoad } from "../../../utils/loadable";

export const ScenicSpotAndFood = lazyLoad(
	() => import('.')
)