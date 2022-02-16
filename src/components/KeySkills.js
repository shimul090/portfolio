import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2, padding: theme.spacing(1), 
	textAlign: 'center', 
}));

function KeySkills() {
	return(
		<>
			<Grid container style={{marginTop: '1rem', marginLeft: '1rem'}}>
	           	<Grid>
	               	<Typography variant="h2" align="center" color="green" gutterButton>
	                   	Key SKills
	               	</Typography> 
	           	</Grid>
	        </Grid>
	        <Divider />
	        <Box sx={{ flexGrow: 1 }} mt={3} elevation={0}>
		      	<Grid container spacing={4} justifyContent="center">
		        	<Grid item sm={6} md={4}>
		          		<Item>
		          			<Typography variant="h6" textAlign="left">PHP</Typography>
		          			<BorderLinearProgress variant="determinate" value={60} />
		          			<Typography variant="h6" textAlign="left">Codeigniter</Typography>
		          			<BorderLinearProgress variant="determinate" value={75} />
		          			<Typography variant="h6" textAlign="left">Pyhton</Typography>
		          			<BorderLinearProgress variant="determinate" value={50} />
		          			<Typography variant="h6" textAlign="left">C++</Typography>
		          			<BorderLinearProgress variant="determinate" value={50} />
		          		</Item>
		        	</Grid>
		        	<Grid item sm={6} md={4}>
		          		<Item>
		          			<Typography variant="h6" textAlign="left">Javascript</Typography>
		          			<BorderLinearProgress variant="determinate" value={50} />
		          			<Typography variant="h6" textAlign="left">ReactJs</Typography>
		          			<BorderLinearProgress variant="determinate" value={30} />
		          			<Typography variant="h6" textAlign="left">Git</Typography>
		          			<BorderLinearProgress variant="determinate" value={60} />
		          			<Typography variant="h6" textAlign="left">MySQL</Typography>
		          			<BorderLinearProgress variant="determinate" value={70} />
		          		</Item>
		        	</Grid>
		      	</Grid>
	    	</Box>
		</>
	);
}

export default KeySkills;