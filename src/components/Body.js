import React from 'react';
import AboutMe from './AboutMe';
import KeySkills from './KeySkills';
import ProjectPortfolio from './ProjectPortfolio';
import Experience from './Experience';

function Body() {
	return(
		<>  
            <AboutMe />
            <KeySkills />
            <ProjectPortfolio />
            <Experience />
        </>
	);
}

export default Body;