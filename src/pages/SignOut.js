import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

function signOut1() {

  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))

}

function SignOut() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const history = useHistory();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [])

  return (
    <div>
      <AppAppBar isLogin={authState} />
      <AmplifyAuthenticator>
        {history.goBack() & signOut1()}
        {authState === "signedout"
          ? (history.push('/home'))
          : null
        }
        {/* {history.goBack()} */}
      </AmplifyAuthenticator>
      <AppFooter/>
    </div>
  );
}

export default withRoot(SignOut);