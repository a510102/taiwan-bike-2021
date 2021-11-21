import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMedia } from '../../../helpers';

import logo from '../../../images/home/Logo-bike1.png';
import back from '../../../images/icon/back.png';

interface Props {
	children?: ReactNode;
}

export function Navigation(props: Props) {
	const { children } = props;
	const navigation = useNavigate();
	const { isMobile, isPad } = useMedia();
	return (
		<header>
			<h1 onClick={() => navigation(-1)}>
				<img src={(isMobile || isPad) ? back : logo} alt="logo" />
			</h1>
			{children}
		</header>
	);
};