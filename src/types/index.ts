export enum WindowWidth {
	Pad = 768,
	Mobile = 400,
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

export type Postion = {
	position: {
		lat: number;
		lng: number;
	};
}

export interface GlobalParameterType extends Postion {};