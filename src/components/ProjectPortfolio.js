import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import '/home/shimul/Documents/Projects/test/src/App.css';
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
	                   	About Me
	               	</Typography> 
	           	</Grid>
	        </Grid>
	        <Divider />
	    	<Box sx={{ flexGrow: 1 }} mt={3}>
		      	<Grid container spacing={2}>
		        	<Grid item md={6} lg={4}>
		          		<Item>
		          			<img className="myPhoto" src={myImage} alt="My Image" />
		          		</Item>
		        	</Grid>
		        	<Grid item md={6} lg={4}>
		          		<Item>
		          			Hello! I am Shimul Debnath. I was born in Bagerhat, raised in Khulna, and am currently living in Dhaka. I am working as an Assistant Director(Programming) in Bangladesh Bank(Yes The Central Bank of Bangladesh). I am a full stack web developer, specializing in PHP and React js. I have four years of professional experience in PHP. I will create React application for you
		          		</Item>
		        	</Grid>
		      	</Grid>
	    	</Box>
	    </>
  	);
}

export default ProjectPortfolio;