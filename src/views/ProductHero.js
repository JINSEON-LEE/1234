import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography.js';
import ProductHeroLayout from './ProductHeroLayout';
import {Link, Button, Grid, Box} from '@material-ui/core';
import main from '../image/main.png'


const styles = (theme) => ({
  background: {
    backgroundColor: 'white' , // Average color of the background image.
    backgroundPosition: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    fontSize: 50,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  button: {
    minWidth: 300,
    color: 'white',
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  box: {
    marginTop: theme.spacing(6),
    fontSize: 24,
    color: 'gray',
    backgroundColor: 'white',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img:{
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classes.box}>
            당신의 Assistant, Univ.A
          </Box>
          <Typography className={classes.subtitle} color="black" align="left" variant="h4">
            이공계 대학생들의<br/> 모든 전공문제, <br/>정확하고 신속하게!
          </Typography>
          <Button className={classes.button}
          variant="contained"
          align='center'
          color='secondary'
          >
            UNIVA START
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className={classes.img} width='100%' src={main}/>
        </Grid>
      </Grid>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);

/*
<Typography color="inherit" align="right" variant="h5">
          이용자 수 : <CountUp start={100} end={400} duration={3}/>명<br/>
          풀이된 문제 : <CountUp start={1000} end={1200} duration={5}/>개<br/>
          정확도 : <CountUp start={10.0} end={98.7} duration={4}/>%
      </Typography>
*/