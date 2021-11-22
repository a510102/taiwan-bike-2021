import { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

export function MapContainer(props: Props) {
	const { children } = props;
	return (
		<div className="map">
			{children}
		</div>
	)
}