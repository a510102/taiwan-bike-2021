import { useLottie } from 'lottie-react'

import loadingJson from '../../../images/json/youbike.json';
import gpsJson from '../../../images/json/youbike_GPS.json';

interface  BikeProps {
  width?: string;
  height?: string;
}

export function Bike(props: BikeProps) {
  const {
    width = '71px',
    height = '50px',
  } = props;
	const lottieStyle = {
    width,
		height,
  };

	const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
  };
	const { View } = useLottie(lottieOptions, lottieStyle);
	
	return (
    <>
		  {View}
    </>
	);
};

export function GpsIcon() {
  
	const lottieStyle = {
    width: '84px',
		height: '84px',
  };

	const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: gpsJson,
  };
	const { View } = useLottie(lottieOptions, lottieStyle);
	
	return (
    <>
		  {View}
    </>
	);
};