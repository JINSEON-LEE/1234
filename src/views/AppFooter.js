import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Link, Container} from '@material-ui/core';
import Typography from '../components/Typography.js';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://univa.co.kr/">
        Univa
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      fontSize: 5,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  head: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 5,
    },
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root} style={{borderTop:'5px solid lightgray'}}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={4} md={3}>
            <Typography className={classes.head} variant="h6" marked="left" gutterBottom>
              LEGAL
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link color='inherit' href="/terms/">이용약관</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={4} md={3}>
            <Typography className={classes.head} variant="h6" marked="left" gutterBottom>
              LOCATION
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                대구광역시 테크노중앙대로333 DGIST
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={4} md={3}>
            <Typography className={classes.head} variant="h6" marked="left" gutterBottom>
              TEL
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                010 - 9921 - 1263
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sm={4} md={3}>
            <br/><Copyright/>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}