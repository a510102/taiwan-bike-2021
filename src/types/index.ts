export enum WindowWidth {
	Pad = 768,
	Mobile = 375,
}

export interface Size {
  width: number | undefined;
	isPad: boolean;
	isMobile: boolean;
}