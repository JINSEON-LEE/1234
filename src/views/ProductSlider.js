import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Container, Box} from '@material-ui/core';
import Typography from '../components/Typography.js';
import semi from '../image/semilogo.svg'

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
});

function ProductSlider(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title}  align="center" >
        <img src={semi}/><br/>
      </Typography>
      <Typography className={classes.title} variant="h5" align="center" component="h2">
        쉽고 간편한 멘토링 절차
      </Typography>
    </Container>
  );
}

ProductSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSlider);