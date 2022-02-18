import React from 'react';
import Box from '@mui/material/Box';
import Banner from './banner.jpg';
import Banner_1 from './banner_2.jpg';
import Typography from '@mui/material/Typography';

function HeaderContent() {
	return (
		<>
			<Box style={{width:'100%', height:'60vh', backgroundImage:`url(${Banner})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
				<Box>
					<Typography variant="h3" component="h4" style={{color:'blue', textAlign:'center'}}>Welcome Folks!!</Typography>
				</Box>
			</Box>
		</>
	);
}

export default HeaderContent;