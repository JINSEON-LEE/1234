import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductFAQLayout from './ProductFAQLayout';
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import {Grid, Container, Box} from '@material-ui/core';
import univa from '../image/back.svg';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const backgroundImage =
  univa;

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize : '100%',
  },
  h5: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  more: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  qa:{
    color: theme.palette.secondary.light,
    fontSize: 100,
    marginLeft: theme.spacing(9),
    marginTop: theme.spacing(0),
  },
});

function ProductFAQ(props) {
  const { classes } = props;

  return (
    <ProductFAQLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item xs={3}>
            <Typography className={classes.qa} variant="h2"> Q&A </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.more} color="black" align="center" variant="h2">
                UnivA 어떻게 이용할까요?
            </Typography>
            <Typography color="black" align="center" variant="h6" className={classes.h5}>
                이용방법부터 금액 정책까지 궁금한 점을 물어보세요!  
            </Typography>
          </Grid>
      </Grid>
      <Typography color="black" align='center'>
        <Paper elevation={4} component="form" className={classes.root} square={false} variant="elevation">
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="궁금한 점을 검색해보세요!"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Paper>
      </Typography>
    </ProductFAQLayout>
  );
}

ProductFAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductFAQ);