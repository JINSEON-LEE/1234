import withRoot from "../withRoot";
import React, { useState, useEffect } from "react";
import { API, Storage, Amplify, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../aws-exports";

import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import SignIn from "./SignIn";
import Chatting from "./Chatting";

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
});

const ChatWithAdmin = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [orderId, setOrderId] = useState(null);
  const [viewChat, setViewChat] = useState(false);

  React.useLayoutEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(
        (data) => console.log(data) & setUser(data) & setAuthState("signedin")
      )
      .catch((err) => console.log(err));
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  React.useEffect(()=>{
      console.log(orderId)
  }, [orderId])

  const handleChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleSubmit = (event) => {
      console.log(event)
      setViewChat(true)
  }

  return authState === AuthState.SignedIn && user ? (
    <div>
      <AppAppBar isLogin={authState} />
      <div>관리자와의 채팅</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="관리자와의 채팅을 원하는 orderId를 적으세요."
          value={orderId}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>확인</button>
      </form>

      {viewChat === false ? (
        <div>
            채팅이 없습니다.
        </div>
      ) : (
        <Chatting
        solver={user.username}
        client={"42c5798e-d5bf-4ca8-9f9b-ddf7dd6ae36f"}
        channelID={orderId}/>
      )}

      <AppFooter />
    </div>
  ) : (
    <SignIn />
  );
};

export default withRoot(withAuthenticator(ChatWithAdmin));
