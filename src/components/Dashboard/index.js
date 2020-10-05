import React from 'react';
import information from '../../Information/dashboard.json';
import { Link } from 'react-router-dom';

import Resume from '../../Information/resume.pdf';
import './dashboard.css';

const Dashboard = () => {
	const text1 = information.AboutCard1;

	return (
		<div>
			<div className='dashboard-images'>
				<a href={Resume} target='_blank' rel='noopener noreferrer'>
					<img
						src='https://img.icons8.com/material-rounded/48/000000/open-resume.png'
						alt=''
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/saim-ahmad-3708481a6/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src='https://img.icons8.com/fluent-systems-filled/48/000000/linkedin.png'
						alt=''
					/>
				</a>
				<a
					href='https://github.com/Zasaimster'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src='https://img.icons8.com/material-rounded/48/000000/github.png'
						alt=''
					/>
				</a>
			</div>
			<div className='dashboard-card'>
				<div className='dash-card-text'>{text1}</div>
                <br />
				<div className='dash-card-text'> While you're here, click on the links above to explore who I am or take a look at some of my past <Link to='/projects'> projects </Link> </div>
			</div>
			<div className='home-picture'>
				<img src='/images/saim_ahmad.jpg' alt='TEST' />
			</div>
		</div>
	);
};

export default Dashboard;
