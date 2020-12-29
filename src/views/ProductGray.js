import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Button, Container} from '@material-ui/core';
import Typography from '../components/Typography.js';
import semi from '../image/semilogo.svg'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    fontSize: 36,
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      marginBottom: theme.spacing(5),
    },
  },
  semi: {
    marginTop: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    fontSize: 18,
  }
});

function ProductGray(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.semi}  align="center" >
          <img src={semi}/><br/>
        </Typography>
        <Typography variant="h5" className={classes.title} component="h2">
          다수의 사용자가 만족한 멘토링
        </Typography>
      </Container>
    </section>
  );
}

ProductGray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductGray);