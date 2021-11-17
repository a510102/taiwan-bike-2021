import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/home/Logo-bike1.png';

interface Props {
	children?: ReactNode;
}

export function Navigation(props: Props) {
	const { children } = props;
	return (
		<header>
			<Link to="/">
				<h1>
					<img src={logo} alt="logo" />
				</h1>
			</Link>
			{children}
		</header>
	);
};