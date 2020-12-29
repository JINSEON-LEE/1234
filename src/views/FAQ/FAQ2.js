import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography.js';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    accord: {
        width: '80%',
        marginLeft: theme.spacing(10),
      },
    faq:{
        fontSize: 72,
        color: 'rgba(0, 0, 0, .25)',
        marginTop: theme.spacing(-6),
    },
    faq2:{
        fontSize: 20,
        
    },
});

const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .05)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

function FAQ2(props) {
    const { classes } = props;
  
    return (
      <Paper className={classes.root}>
        <Container className={classes.container}>
            <Typography className={classes.faq} variant='h2'>
                FAQ
            </Typography>
            <div className={classes.accord}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6' className={classes.faq2}>1. 가격 책정 상세기준이 어떻게 되나요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        잘 몰라용
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography variant='h6' className={classes.faq2} >2. 결제는 몇 분 안에 완료해야 하나요?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        박력분
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Container>
      </Paper>
  );
}

FAQ2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ2);