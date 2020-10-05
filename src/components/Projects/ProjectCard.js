import React from 'react';

import './projects.css'

const renderBody = description => {
    console.log(description)
    return description.map((bulletPoint, index) => {
        const text = "- "
        const finalText = text + bulletPoint
        return (
			<div>
				<div key='index'>
                    {finalText}
                </div>
                <br />
			</div>
		);
    })


}

const ProjectCard = ({information}) => {
    const { title, description, imageUrl, linkTitle, link } = information;
    console.log(imageUrl)

    return (
		<div className='projects-card'>
			<div className='projects-title'>{title}</div>
			<div className='projects-body-wrapper'>
				<div className='projects-body-text'>
					{renderBody(description)}
					<br />
				</div>
				<div className='projects-body-picture'>
					<img src={imageUrl} alt='' />
				</div>
			</div>
			<div className='projects-link'>
				<a href={link} target='_blank' rel='noopener noreferrer'>{linkTitle}</a>
			</div>
		</div>
	);
}


export default ProjectCard;