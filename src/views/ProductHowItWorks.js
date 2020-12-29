import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography.js';
import medal from '../icon/medal.svg';
import school from '../icon/school.svg';
import time from '../icon/time.svg';
import calender from '../icon/calender.svg';
import magnifier from '../icon/magnifier.svg';
import file from '../icon/file.svg';
import semi from '../image/semilogo.svg'

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
  },
  title: {
    marginBottom: theme.spacing(10),
    fontSize: 36,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  semi: {
    marginBottom: theme.spacing(5),
  },
  ment:{
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.semi}  align="center" >
          <img src={semi}/><br/>
        </Typography>
        <Typography variant="h5" className={classes.title} component="h2">
          신속하고 정확한 시스템
        </Typography>
        <div>
          <Grid container spacing={4}>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={medal} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  테스트를 통해<br/> 실력이 검증된 멘토
                </Typography>
              </div>
            </Grid>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={school} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  멘토 교육을 통한 <br/>더 정확한 풀이
                </Typography>
              </div>
            </Grid>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={time} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  시간을 엄수하는<br/> 칼같은 문제풀이
                </Typography>
              </div>
            </Grid>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={calender} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  독보적인 문제 배분<br/> & 문제 풀이 시스템
                </Typography>
              </div>
            </Grid>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={magnifier} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  시간을 줄여주는 <br/>간편한 검색 기능
                </Typography>
              </div>
            </Grid>
            <Grid item sm={1.5} md={1}>
              <div className={classes.item}>
                <img src={file} height='100%'/>
              </div>
            </Grid>
            <Grid item sm={4.5} md={3}>
              <div className={classes.item}>
                <Typography className={classes.ment} variant="h5" align="left">
                  자체제작<br/>문제 & 솔루션 은행
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);