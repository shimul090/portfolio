import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import '/home/shimul/Documents/Projects/portfolio/src/App.css';
import myImage from './Shimul.jpg';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2, padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
}));

function ProjectPortfolio() {
  	return (
  		<>
	  		<Grid container style={{marginTop: '1rem', marginLeft: '1rem'}}>
	           	<Grid>
	               	<Typography variant="h2" align="center" color="green" gutterButton>
	                   	My sample work
	               	</Typography> 
	           	</Grid>
	        </Grid>
	        <Divider />
	    	<Box sx={{ flexGrow: 1 }} mt={3}>
		        <Grid container spacing={2} justifyContent="center">
			        <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	ABC.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	XYZ.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	EFG.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	IJK.com
				        </Item>
				    </Grid>

				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	startup.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	new.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	success.com
				        </Item>
				    </Grid>
				    <Grid item sm={6} md={4} lg={3}>
				        <Item>
				        	failure.com
				        </Item>
				    </Grid>
			    </Grid>
	        </Box>
	    </>
  	);
}

export default ProjectPortfolio;