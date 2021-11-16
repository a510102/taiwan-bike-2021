import { useLottie } from 'lottie-react'

import loadingJson from '../../../images/json/youbike.json';

export function Loading() {
	const lottieStyle = {
    width: '71px',
		height: '50px',
  };

	const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
  };
	const { View } = useLottie(lottieOptions, lottieStyle);
	
	return (
		<div className="loading">
			{View}
		</div>
	);
};