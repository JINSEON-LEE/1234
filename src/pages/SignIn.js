import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import {AmplifyAuthenticator} from '@aws-amplify/ui-react';
import {onAuthUIStateChange} from '@aws-amplify/ui-components';
import AppAppBar from '../views/AppAppBar';
import AppFooter from '../views/AppFooter';
import {UnivaSignIn, UnivaSignUp} from '../views/SignInSignUp'
import { Redirect, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
 
function SignIn2(props) {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  let history = useHistory();
  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [])

  return (
    <div>
      <AppAppBar isLogin={authState} />
      { authState !== 'signedin' ? (
      <AmplifyAuthenticator>
        <UnivaSignIn/>
        <UnivaSignUp/>
      </AmplifyAuthenticator>) : <Redirect to="/"></Redirect>
      }
      <AppFooter/>
    </div>
  );
}

export default withRoot(SignIn2);