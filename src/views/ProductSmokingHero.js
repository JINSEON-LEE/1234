import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography.js';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
  button: {
    height: 'auto',
    color: 'white',
    padding: theme.spacing(2, 5),
    fontSize: 28,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  title:{
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: 'gray',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h6" color='gray' className={classes.title} component="h2">
        For   the   bright   20’s - UnivA -
      </Typography>
      <Button color='secondary' variant='contained' className={classes.button}>
          도움이 필요하신가요?
      </Button>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
