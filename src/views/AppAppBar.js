import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import {Link, List, ListItem, ListItemText, IconButton, MenuItem, Drawer} from '@material-ui/core';
import AppBar from '../components/AppBar';
import AppBarList from '../components/AppBarList';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import logo from '../image/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, useHistory} from 'react-router-dom'


const styles = (theme) => ({
  tool: {
    flex: 0.2,
    fontSize: 17,
    marginLeft: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      flex: 0.1,
    },
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.Black,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.Black,
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  linkSecondary: {
    color: theme.palette.primary.main,
  },
  nav: {
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


function AppAppBar(props) {
  const location = useLocation();
  const { classes } = props;
  let history = useHistory();

  const [state, setState] = React.useState({toggle: false});

  const handleDrawerToggle = () => setState({toggle: !state.toggle});

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <img height='60' src={logo}/>
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/solve"
          >
            {'문제풀이'}
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/mentoring"
          >
            {'멘토링'}
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/chatwithadmin"
          >
            {'관리자와의 채팅'}
          </Link>
          <div className={classes.right}>
            {console.log(props.isLogin)}
            {props.isLogin === "signedin"
              ? (
                <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="/sign-out/"
                >
                  {'로그아웃'}
                </Link>
              )
              : (
                <div>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  href="/sign-in/"
                  path = {location.pathname}
                >
                  {'로그인'}
                </Link>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={clsx(classes.rightLink)} //색깔에 접근할 때: classes.linksecondary
                  href="/sign-up/"
                >
                  {'회원가입'}
                </Link>
                </div>
              )
            }


            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon className={[classes.right, classes.nav].join(' ')}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={state.toggle} anchor='right'>
        <MenuItem onClick={handleDrawerToggle}>
          <List>
            <ListItemLink href="/solve">
              <ListItemText primary='문제풀이'/>
            </ListItemLink>
            <ListItem button onClick = {() => {history.push('/mentoring');}} >
              <ListItemText primary='멘토링'/>
            </ListItem>
            <ListItem button onClick = {() => {history.push('/chatwithadmin');}} >
              <ListItemText primary='관리자와의 채팅'/>
            </ListItem>
            {props.isLogin === "signedin"
              ? (
              <ListItem button onClick = {() => {history.push('/sign-out');}} >
                <ListItemText primary='로그아웃'/>
              </ListItem>
              ) : (
                <div>
                  <ListItem button onClick = {() => {history.push('/sign-in');}} >
                    <ListItemText primary='로그인'/>
                  </ListItem>
                  <ListItem button onClick = {() => {history.push('/sign-up');}} >
                    <ListItemText primary='회원가입'/>
                  </ListItem>
                </div>
              )
            }
          </List>
        </MenuItem>
      </Drawer>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);