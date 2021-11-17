import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalStore {
	position: {
		lat: number,
		lng: number,
	};
}

const defaultPosition = {
	lat: 24.155525,
	lng: 120.66304,
};

const getPositionLocalStorage = () => {
	try {
		let storePosition= localStorage.getItem('currentPosition');
		if(!storePosition) {
			throw Error('not data');
		}
		const currentPosition = JSON.parse(storePosition);
		return currentPosition;
	} catch (error) {
		console.warn(error);
		return defaultPosition;
	}
};

const initialState: GlobalStore = {
	position: getPositionLocalStorage(),
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		changePosition(state, action: PayloadAction<{lat: number; lng: number}>) {
			const { lat, lng } = action.payload;
			state.position = { lat, lng };
		},
	}
});

export const { changePosition } = globalSlice.actions;

export default globalSlice.reducer;