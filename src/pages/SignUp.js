import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import {AmplifyAuthenticator} from '@aws-amplify/ui-react';
import {onAuthUIStateChange} from '@aws-amplify/ui-components';
import AppAppBar from '../views/AppAppBar';
import AppFooter from '../views/AppFooter';
import {UnivaSignIn, UnivaSignUp} from '../views/SignInSignUp'


function SignUp({history}) {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [])

  return (
    <div>
      <AppAppBar isLogin={authState} />
      <AmplifyAuthenticator initialAuthState = "signup">
        <UnivaSignIn/>
        <UnivaSignUp/>
        { authState === "confirmSignUp"
          ? history.goBack()
          : null
        }
    </AmplifyAuthenticator>
      <AppFooter/>
    </div>
  );
}

export default withRoot(SignUp);