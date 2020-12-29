import './Solve.css';
import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { API, Storage } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Typography from './components/Typography';
import {Grid, Button, Box, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import ex2 from "./image/electro.png";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';

Amplify.configure(awsconfig);

const Solve = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return authState === AuthState.SignedIn && user ? (
    <div className="Solve">
    <React.Fragment>
    <AppAppBar />
      <Grid
       container
       direction="row"
       justify="center"
       alignItems="flex-start"
       >
        <Grid>
          <React.Fragment>
            <Box border={1} style={{margin: '1em 1em 1em',padding:'1em 2em'}}>
              <Button variant='contained' color='primary'>
                완료
              </Button>
              <List>
                <ListItem
                  button
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}>
                  <ListItemText primary="남은시간 2:13 // 0"/>
                </ListItem>
                <Divider/>
                <ListItem
                  button
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}>
                  <ListItemText primary="남은시간 3:31 // 2"/>
                </ListItem>
                <Divider/>
                <ListItem
                  button
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemText primary="남은시간 4:34 // 0"/>
                </ListItem>
                <Divider/>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}>
                  <ListItemText primary="남은시간 4:41 // 1"/>
                </ListItem>
                <Divider/>
                <ListItem
                  button
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}>
                  <ListItemText primary="남은시간 6:31 // 2"/>
                </ListItem>
                <Divider/>
                <ListItem
                  button
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}>
                  <ListItemText primary="남은시간 6:51 // 3"/>
                </ListItem>
              </List>
            </Box>
          </React.Fragment>
          <React.Fragment>
            <Box border={1} style={{margin: '1em 1em 1em',padding:'1em 2em'}}>
              <br/><br/><br/><br/><br/><br/>
             운동에너지는 2분의1 곱하기<br/>물체의 질량 곱하기 속도의 제곱이다.
              <br/>
              <br/>
              <br/>
              <br/><br/><br/><br/><br/><br/>
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
          <Box border={1} style={{maxHeight:'120', margin: '1em 1em 1em',padding:'1em 2em'}}>
            문제
            <br/>
            <img
              src={ex2}
              width="666"
              height="562"/>
            <br/><br/><br/><br/><br/><br/><br/>
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
  </React.Fragment>
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="mmmm"
        slot="signin">
        <a href='./AskNonAuth'>비회원등록하기</a>
      </AmplifySignIn>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "email" },
          { type: "password" },
          { type: "username"},
          {
              type: "gender",
              label: "Gender",
              placeholder: "Enter your Gender(male/female)",
              required: true
          },
          {
              type: "birthdate",
              label: "Birthdate",
              placeholder: "Enter your Birthdate(yyyy/mm/dd)",
              required: true
          },
        ]}
      />
    </AmplifyAuthenticator>
  );
}

export default Solve;
