import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        中村覚
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
  return (

    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
    </Box>
  )
};

 
export default Footer;