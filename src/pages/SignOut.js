import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import AppForm from '../views/AppForm';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';
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
          ? (history.push('/'))
          : null
        }
        {/* {history.goBack()} */}
      </AmplifyAuthenticator>
      <AppFooter/>
    </div>
  );
}

export default withRoot(SignOut);