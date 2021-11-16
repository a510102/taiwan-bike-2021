import { ReactNode } from 'react';
import logo from '../../../images/home/Logo-bike1.png';

interface Props {
	children?: ReactNode;
}

export function Navigation(props: Props) {
	const { children } = props;
	return (
		<header>
			<h1>
				<img src={logo} alt="logo" />
			</h1>
			{children}
		</header>
	);
};