import './Solve.css';
import React, { useState, useEffect } from 'react';
import { API, Storage, Amplify, Auth } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { listProblems } from '../graphql/queries';

import Typography from '../components/Typography';
import {Grid, Button, Box, List, ListItem, ListItemText, Divider, Container, Paper, IconButton, InputBase, Dialog, 
  DialogActions,DialogContent, DialogContentText, DialogTitle,Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { makeStyles, withStyles} from '@material-ui/core/styles';

import ex2 from "../image/electro.png";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import withRoot from '../withRoot'

import AppAppBar from '../views/AppAppBar';
import AppFooter from '../views/AppFooter';
import SignIn from './SignIn.js';

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    alignItems: 'center',
    position: 'relative',
  },
  form: {
    marginTop: theme.spacing(6),
  },
  number: {
    fontSize: 30,
    color: theme.palette.secondary.light,
    marginLeft: theme.spacing(2),
  },
  content: {
    fontSize: 24,
    marginLeft: theme.spacing(1),
  },
  inputbox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  searchbar: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 742,
    marginTop: theme.spacing(5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  method: {
    textAlign: 'center',
  },
  red:{
    color: 'red',
    fontSize: 15,
  },
  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: '90%',
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Solve = () => {
  const classes = useStyles();

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [problems, setProblems] = useState([]);
  const [viewSol, setViewSol] = useState(false)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleViewSol = () => {
    setViewSol(!viewSol);
  }

  React.useLayoutEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(data => console.log(data) & setUser(data) & setAuthState("signedin"))
    .catch(err => console.log(err));

    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  React.useLayoutEffect(() => {
    fetchProblems().catch(err => console.log(err));
  }, [authState]);

  async function nowAuth() {
    const nowAuth = await Auth.currentUserInfo();
    console.log(nowAuth);
    const username = nowAuth.username;
    return username;
  }

  async function fetchProblems() {
    console.log("fetchProblems")
    const username = await nowAuth().catch(err => console.log(err));
    const apiData = await API.graphql({ query: listProblems, variables: {filter: {solvername: {eq: username}}}});
    const problemsFromAPI = apiData.data.listProblems.items;
    await Promise.all(problemsFromAPI.map(async problem => {
      if (problem.image) {
        const image = await Storage.get(problem.image);
        problem.image = image;
      }
      return problem;
    }))
    console.log(problemsFromAPI);
    setProblems(apiData.data.listProblems.items);
  }

  
  if (problems.length === 0) return (<div>There isn't problem.</div>)
  return authState === AuthState.SignedIn && user ? (
    <div className="Solve">
    <React.Fragment>
    <AppAppBar isLogin = {authState}/>
    <div>{problems[0].subject}</div>
      <Grid
       container
       direction="row"
       justify="center"
       alignItems="flex-start"
       >
        <Grid>
          <React.Fragment>
            <Box border={0} style={{margin: '0em 0em 0em 0em',padding:'0em 0em'}}>
              <Table border='1px solid gray' align='center' className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <StyledTableCell align='center'>번호</StyledTableCell>
                        <StyledTableCell align='center'>마감시간</StyledTableCell>
                        <StyledTableCell align='center'>남은 문제수</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {problems.map((problem, index) => (
                    <TableRow key={problem.subject}>
                        <StyledTableCell align='center' component='th' scope="row"><ListItem
                        button
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}>{index+1}</ListItem></StyledTableCell>
                        <StyledTableCell align='center'><ListItem
                        button
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}>{problem.deadline}</ListItem></StyledTableCell>
                        <StyledTableCell align='center'><ListItem
                        button
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}>1</ListItem></StyledTableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </Box>
          </React.Fragment>
          <React.Fragment>
            <Box border={1} style={{margin: '1em 1em 1em',padding:'1em 2em'}}>
              <br/><br/><br/><br/><br/><br/>
             (치팅시트 들어올 자리)
              <br/>
              <br/>
              <br/>
              <br/><br/><br/><br/><br/><br/>
              <button onClick={handleViewSol}>
                {
                  viewSol === true
                  ? <span>문제보기</span>
                  : <span>풀이보기</span>
                }
              </button>
            </Box>
          </React.Fragment>
          <React.Fragment>
            <Box border={1} style={{maxHeight:'120', margin: '1em 1em 1em',padding:'1em 2em'}}>
            <Typography variant='body1' align='center'>
            <br/><br/>
              멘토 재배정 요청 : 사유
              <br/><br/>
            </Typography>
            </Box>
          </React.Fragment>
        </Grid>
        <Grid item xs={6}>
          <Box border={1} style={{minHeight:'60', maxHeight:'120', margin: '1em 1em 1em',padding:'1em 2em'}}>
            문제
            {
                problems[selectedIndex].image && <img src={problems[selectedIndex].image} alt="문제 사진이 없습니다." />
            }
          </Box>
          <React.Fragment>
            <Box border={1} style={{maxHeight:'120', margin: '1em 1em 1em',padding:'1em 2em'}}>
             <Typography variant='h4' align='center'>
             <ArrowBackIosOutlinedIcon/>남은시간 02:13 ____ 2/10 <ArrowForwardIosOutlinedIcon/>
             <Grid direction='column' alignItems='center'>
              <Button variant='outlined'>
               풀이보기
              </Button>
              <Button variant='outlined'>
               검토요청
              </Button>
             </Grid>
             </Typography>
            </Box>
          </React.Fragment>
        </Grid>
        <Grid item xs={3}>
          <React.Fragment>
            <Box border={1} style={{maxHeight:'120', margin: '1em 1em 1em',padding:'0em 2em'}}>
              <Typography variant='h6' align='left'>
                <br/>사용자 : 왜 ....인가요?<br/><br/>
              </Typography>
              <Typography variant='h6' align='right'>
                멘토 : ......입니다<br/><br/>
              </Typography>
              <Typography variant='h6' align='left'>
                사용자 : [사진] <br/><br/>사용자 : 이건가요?<br/><br/>
              </Typography>
              <Typography variant='h6' align='right'>
                멘토 : 네 맞아요!<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </Typography>
              <Divider/>
              <Grid alignItems='flex-end'>
                <Button variant='outlined'>
                  +수식
                </Button>
                ----------------[채팅입력]----------------
                <Button variant='outlined'>
                  [전송]
                </Button>
              </Grid>
            </Box>
          </React.Fragment>
          <React.Fragment>
            <Box border={1} style={{maxHeight:'120', margin: '1em 1em 1em',padding:'1em 2em'}}>
            <br/>
              <Typography variant='h6' align='center'>
                풀이중 <ArrowForwardIosOutlinedIcon/> 풀이완료/멘토링 <ArrowForwardIosOutlinedIcon/> 종료
              </Typography>
              <br/><br/>
            </Box>
          </React.Fragment>
        </Grid>
      </Grid>
      <AppFooter />
  </React.Fragment>
    </div>
  ) : (
    <SignIn />
  );
}

export default withRoot(Solve);
