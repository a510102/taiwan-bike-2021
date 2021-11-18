import jsSHA from 'jssha';

const TOURISM_URL = 'https://ptx.transportdata.tw/MOTC';
const DATA_TYPE = 'JSON';

export type ApiResponseType = {
	status?: string;
	data: any;
	success: boolean;
};

const GetAuthorizationHeader = () => {
	const APP_ID = process.env.REACT_APP_APP_ID;
	const APP_KEY: string = process.env.REACT_APP_APP_KEY || '';
	const GMTString = new Date().toUTCString();
	const ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(APP_KEY, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	const HMAC = ShaObj.getHMAC('B64');
	const Authorization = `hmac username="${APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

	return {
		'Authorization': Authorization,
		'X-Date': GMTString,
		'content-type': 'application/json',
		/*,'Accept-Encoding': 'gzip'*/}; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}

const fetchData = async (
		url: string, 
		data?: any, 
		method?:string, 
	) => {
	try {
		const fetchOptions = {
			body: JSON.stringify(data),
			headers: GetAuthorizationHeader(),
			method: method || 'GET',
		};
		const response = await fetch(`${url}`, fetchOptions);
		const { status } = response;
		if (status !== 200) {
			console.warn(response);
			return {
				status,
				data: response,
				success: false,
			}
		}
		const resultData = await response.json();
		return {
			status,
			data: resultData,
			success: true,
		};
	} catch (error) {
		console.warn(error);
		return {
			data: error,
			success: false,
		};	
	}
}

const queryFormat: (queryName: string, queryValue: string) => string = (queryName, queryValue) => {
	const query = `$${queryName}=${queryValue}`;
	return queryValue ? query : ''
};

export const fetchBikeStation = async (lat: number, lng: number) => {
	const query = `?${queryFormat('spatialFilter', `nearby(${lat}, ${lng}, 1000)`)}&${queryFormat('format', DATA_TYPE)}`;

	const response = await fetchData(`${TOURISM_URL}/v2/Bike/Station/NearBy${query}`);
	return response;
};

export const fetchBikeAvailability = async (lat: number, lng: number) => {
	const query = `?${queryFormat('spatialFilter', `nearby(${lat}, ${lng}, 1000)`)}&${queryFormat('format', DATA_TYPE)}`;
	const response = await fetchData(`${TOURISM_URL}/v2/Bike/Availability/NearBy${query}`);
	return response;
};

export const fetchCyclingShape = async (city: string) => {
	const query = `?&${queryFormat('format', DATA_TYPE)}`;
	const response = await fetchData(`${TOURISM_URL}/v2/Cycling/Shape/${city}${query}`);
	return response;
};

export const fetchTourismScenicSpot = async (lat: number, lng: number) => {
	const query = `?${queryFormat('spatialFilter', `nearby(${lat}, ${lng}, 1000)`)}&${queryFormat('format', DATA_TYPE)}`;
	const response = await fetchData(`${TOURISM_URL}/v2/Tourism/ScenicSpot${query}`);
	return response;
};

export const fetchTourismRestaurant = async (lat: number, lng: number) => {
	const query = `?${queryFormat('spatialFilter', `nearby(${lat}, ${lng}, 1000)`)}&${queryFormat('format', DATA_TYPE)}`;
	const response = await fetchData(`${TOURISM_URL}/v2/Tourism/Restaurant${query}`);
	return response;
};