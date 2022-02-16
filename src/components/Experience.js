import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2, padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
}));

function Experience() {
	return(
		<>
			<Grid container style={{marginTop: '1rem', marginLeft: '1rem'}}>
	           	<Grid>
	               	<Typography variant="h2" align="center" color="green" gutterButton>
	                   	Experience
	               	</Typography> 
	           	</Grid>
	        </Grid>
	        <Divider />
	        <Container maxWidth="md">
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton>Bangladesh Bank</Typography>
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton><b>Assistant Programmer</b></Typography>
	        	<p>Working as a full stack developer focusing on web development</p>
	        	<p><h3>Stacks</h3></p>
	        </Container>
	        <Box sx={{ flexGrow: 1 }} mt={3}>
		        <Grid container spacing={2} justifyContent="center">
			        <Grid item sm={3} md={1}>
				        <Item>
				        	PHP
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				      	<Item>
				       		Codeigniter
				       	</Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				        <Item>
				         	MySQL
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				       	<Item>
				       		Javascript
				       	</Item>
				    </Grid>
			    </Grid>
	        </Box>

			
			<Container maxWidth="md">
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton>Sonali Bank Limited</Typography>
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton><b>Assistant Programmer</b></Typography>
	        	<p>Working as a full stack developer focusing on web development</p>
	        	<p><h3>Stacks</h3></p>
	        </Container>
	        <Box sx={{ flexGrow: 1 }} mt={3}>
		        <Grid container spacing={2} justifyContent="center">
			        <Grid item sm={3} md={1}>
				        <Item>
				        	PHP
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				      	<Item>
				       		Codeigniter
				       	</Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				        <Item>
				         	MySQL
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				       	<Item>
				       		PostGreSQL
				       	</Item>
				    </Grid>
			    </Grid>
	        </Box>

	        <Container maxWidth="md">
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton>Tirzok Private Limited</Typography>
	        	<Typography variant="h4" textAlign="left" color="red" gutterButton><b>Junior Software Developer</b></Typography>
	        	<p>Worked as a software engineer focusing on system level software</p>
	        	<p><h3>Stacks</h3></p>
	        </Container>
	        <Box sx={{ flexGrow: 1 }} mt={3}>
		        <Grid container spacing={2} justifyContent="center">
			        <Grid item sm={3} md={1}>
				        <Item>
				        	C
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				      	<Item>
				       		C++
				       	</Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				        <Item>
				         	Python
				        </Item>
				    </Grid>
				    <Grid item sm={3} md={1}>
				       	<Item>
				       		Bash
				       	</Item>
				    </Grid>
			    </Grid>
	        </Box>	        
		</>
	);

}

export default Experience;