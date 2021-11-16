import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

import { WindowWidth, Size } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function distance(lat1: number, lon1: number, lat2: number, lon2: number, unit?: string): number {
	if ((lat1 === lat2) && (lon1 === lon2)) {
			return 0;
	}
	else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
					dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit === "K" || !unit) { dist = dist * 1.609344 }
			if (unit ==="N") { dist = dist * 0.8684 }
			return dist;
	}
};

export const useCountDown = (sec: number) => {
	const [countDownTime, setCountDownTime] = useState<number>(sec);
	const [isStart, setIsStart] = useState<boolean>(false);

	const startCountDown: () => void = useCallback(() => setIsStart(true), []);
	const stopCountDown: () => void = useCallback(() => setIsStart(false), []);

	useEffect(() => {
		if (isStart) {
			if (countDownTime === 0) {
				stopCountDown();
				setCountDownTime(sec);
			} else {
				setTimeout(() => setCountDownTime(preCountDownTime => preCountDownTime -= 1), 1000); 
			}
		}
	}, [countDownTime, isStart, stopCountDown]);

	return {
		countDownTime,
		startCountDown,
		stopCountDown,
	}
};

export const useMedia: () => Size = () => {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

	useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.screen.width);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	const isPad = !!(windowWidth && windowWidth <= WindowWidth.Pad && windowWidth > WindowWidth.Mobile);
	const isMobile = !!(windowWidth && windowWidth <= WindowWidth.Mobile);
	return {
		width: windowWidth,
		isPad,
		isMobile,
	};
}