import React from 'react';
import {Link} from 'react-router-dom';

import './menu.css';

const Menu = () => {
	return (
		<div className='menu-container'>
			<div className='menu-wrapper1'>
				<h1 className='menu-logo'> <Link to='/'> Saim Ahmad </Link></h1>
				<nav>
					<ul>
						<li>
							<Link to='/'> About </Link>
						</li>
						<li>
							<Link to='/projects'> Projects </Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Menu;