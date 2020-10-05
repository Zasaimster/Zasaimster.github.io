import React from 'react';
import ProjectCard from './ProjectCard';

import information from '../../Information/dashboard.json';
import './projects.css';

const Projects = () => {
	const { Palace, AmazonChecker } = information;
	console.log(Palace.description);

	return (
		<div className='projects-wrapper'>
			<h1 className='projects-page-title'> Projects </h1>
			<ProjectCard information={Palace} />
			<ProjectCard information={AmazonChecker} />
		</div>
	);
};

export default Projects;
