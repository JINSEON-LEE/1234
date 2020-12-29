import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Container, Box} from '@material-ui/core';
import Typography from '../components/Typography.js';
import semi from '../image/semilogo.svg';
import sub from '../image/subject.svg';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    alignItems: 'center',
    maxHeight: 1200,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    fontSize: 36,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  img:{
    maxWidth:'95%',
  }
});

function ProductUniverse(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title}  align="center" >
        <img src={semi}/><br/>
      </Typography>
      <Typography className={classes.title} variant="h5" align="center" component="h2">
        멘토링 가능한 과목
      </Typography>
      <Typography className={classes.title}  align="center" >
        <img className={classes.img} src={sub}/>
      </Typography>
    </Container>
  );
}

ProductUniverse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductUniverse);