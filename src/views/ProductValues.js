import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography.js';
import CountUp from 'react-countup';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
    fontSize: 40,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      marginBottom: theme.spacing(0),
    },
  },
  subtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <div className={classes.item}>
              <Typography className={classes.subtitle} variant="h6">
                {'독보적인'}
              </Typography>
              <Typography variant="h6" className={classes.title}>
                UNIVA
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className={classes.item}>
              <Typography className={classes.subtitle} variant="h6">
                {'평균 풀이시간'}
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <CountUp start={0} end={10} duration={4.5}/>분
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className={classes.item}>
              <Typography className={classes.subtitle} variant="h6">
                {'정확도'}
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <CountUp start={10.0} end={98.7} duration={3} decimal="." decimals={1}/>%
              </Typography>
              
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className={classes.item}>
              <Typography className={classes.subtitle} variant="h6">
                {'문제풀이 수'}
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <CountUp start={10} end={31} duration={4} decimal="," decimals={3}/>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);