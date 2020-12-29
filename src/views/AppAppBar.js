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
    color: theme.palette.secondary.main,
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
  const { classes } = props;

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
            href="/FAQ/"
          >
            {'이용방법'}
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/ask"
          >
            {'질문하기'}
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/list"
          >
            {'내 질문'}
          </Link>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            className={classes.tool}
            href="/"
          >
            {'이용후기'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/sign-in/"
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
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon className={[classes.right, classes.nav].join(' ')}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={state.toggle} anchor='right'>
        <MenuItem onClick={handleDrawerToggle}>
          <List>
            <ListItemLink href="/FAQ/">
              <ListItemText primary='이용방법'/>
            </ListItemLink>
            <ListItem button>
              <ListItemText primary='질문하기'/>
            </ListItem>
            <ListItem button>
              <ListItemText primary='내 질문'/>
            </ListItem>
            <ListItem button>
              <ListItemText primary='이용후기'/>
            </ListItem>
            <ListItem button>
              <ListItemText primary='로그인'/>
            </ListItem>
            <ListItem button>
              <ListItemText primary='회원가입'/>
            </ListItem>
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