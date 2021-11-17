export enum WindowWidth {
	Pad = 768,
	Mobile = 375,
}

export interface Size {
  width: number | undefined;
	isPad: boolean;
	isMobile: boolean;
}

export type CountDownType = {
	countDownTime: number;
	startCountDown: () => void;
	stopCountDown: () => void;
}

export type GlobalParameterType = {
	position: {
		lat: number;
		lng: number;
	};
}