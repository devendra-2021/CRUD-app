import { Box, Typography, makeStyles, withTheme } from '@material-ui/core';
import Youtube from '../Assets/Images/unsplas.jpg';
// import InstaTele from '../Assets/Images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        // backgroundImage: 'url('+Youtube+')',
        color: 'white',
        alignItems: 'center',
        margin: 26,
        '& > *': {
            marginTop: -14
        }
    },
    image: {
        width: '100%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            {/* <Typography variant="h4">New Awesom website</Typography> */}
            <Box style={{display: 'flex'}}>
                {/* <Typography variant="h4">New Awesom website</Typography> */}
                <img src={Youtube} className={classes.image} style={{backgroundSize: "cover", opacity: '0.8'}}></img>
                {/* <img src={InstaTele} className={classes.image} /> */}
            </Box>
        </Box>
    )
}

export default CodeForInterview;