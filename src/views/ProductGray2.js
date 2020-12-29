import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Button, Container} from '@material-ui/core';
import Typography from '../components/Typography.js';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  whitecontainer: {
    marginBottom: theme.spacing(5),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    fontSize: 24,
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: 'gray',
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
      marginTop: theme.spacing(1),
    },
  }
});

function ProductGray2(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title} component="h2">
          이렇게 좋은 Univ.A 바로 시작해볼까요?
        </Typography>
        <ArrowDownwardIcon/>
        <Button variant='h5' className={classes.button}>
            UNIVA START
        </Button>
      </Container>
    </section>
  );
}

ProductGray2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductGray2);