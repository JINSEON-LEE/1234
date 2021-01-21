import React, { useEffect, useState } from "react";

import { API, Storage, Amplify, Auth, graphqlOperation } from "aws-amplify";
import "@aws-amplify/pubsub";

import { createMessage } from "../graphql/mutations";
import { onCreateMessage } from "../graphql/subscriptions";
import { messagesByChannelId } from "../graphql/queries";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../aws-exports";

import "./Chatting.css";
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

function Chatting() {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const MessagesQuery = `query MyQuery($channelID: String = "${"39a59865-cc12-44a8-86ae-1374fc315d50"}") {
        messagesByChannelID(channelID: $channelID, sortDirection: ASC) {
          nextToken
          items {
            author
            channelID
            body
            client
            createdAt
            id
            owner
            solver
            updatedAt
          }
        }
      }
      `;
    API.graphql({
      query: MessagesQuery,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })
      .then((response) => {
        const items = response?.data?.messagesByChannelID?.items;
        console.log(items);
        if (items) {
          setMessages(items);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // API
    //   .graphql(graphqlOperation(messagesByChannelId, {
    //     channelID: '39a59865-cc12-44a8-86ae-1374fc315d50',
    //     sortDirection: 'ASC'
    //   }))
    //   .then((response) => {
    //     const items = response?.data?.messagesByChannelID?.items;
    //     console.log(items)
    //     if (items) {
    //       setMessages(items);
    //     }
    //   })
    //   .catch((error) => { console.log(error) })
  }, []);

  async function nowAuth() {
    const nowAuth = await Auth.currentUserInfo();
    const username = nowAuth.username;
    return username;
  }

  async function step() {
    const username = await nowAuth().catch((err) => console.log(err));
    console.log(username);
    const onCreateMessage1 = `subscription MySubscription {
      onCreateMessage(solver: "34895469-cf78-48fd-b353-ace169b02276", client: "ac368fea-d29a-4f6e-a716-e103e6a8de97") {
        body
        channelID
        author
        client
        id
        solver
        updatedAt
        createdAt
      }
    }
    `;
    // const subscription = API.graphql(
    //   graphqlOperation(onCreateMessage, { solver: username, client: "ac368fea-d29a-4f6e-a716-e103e6a8de97" })
    // ).subscribe({
    //   next: (event) => {
    //     setMessages([...messages, event.value.data.onCreateMessage]);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
    const subscription = await API.graphql({
      query: onCreateMessage1,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    }).subscribe({
      next: (event) => {
        setMessages([...messages, event.value.data.onCreateMessage]);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // return () => {
    //   subscription.unsubscribe();
    // };
  }

  useEffect(() => {
    step();

    // const subscription = API
    //   .graphql(graphqlOperation(onCreateMessage), {owner: Auth.currentAuthenticatedUser()})
    //   .subscribe({
    //     next: (event) => {
    //       setMessages([...messages, event.value.data.onCreateMessage]);
    //     }
    //   })
    // const subscription = API
    //   .graphql({
    //     query: onCreateMessage,
    //     authMode: "AMAZON_COGNITO_USER_POOLS",
    //   })
    //   .subscribe({
    //     next: (event) => {
    //       setMessages([...messages, event.value.data.onCreateMessage]);
    //     },
    //     authMode: "AMAZON_COGNITO_USER_POOLS",
    //   });

    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => { console.log(error) })

    // return () => {
    //   subscription.unsubscribe();
    // }
  }, [username, messages]);

  const handleChange = (event) => {
    setMessageBody(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const input = {
      author: "js",
      body: `${messageBody}`,
      channelID: "39a59865-cc12-44a8-86ae-1374fc315d50",
      client: "ac368fea-d29a-4f6e-a716-e103e6a8de97",
      solver: "39a59865-cc12-44a8-86ae-1374fc315d50",
    };

    try {
      setMessageBody("");
      // await API.graphql(graphqlOperation(createMessage, { input }));
      const res = await API.graphql({
        query: createMessage,
        variables: { input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log(res);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="container">
      <div className="messages">
        <div className="messages-scroller">
          {messages.map((message) => (
            <div
              key={message.id}
              className={message.author === "js" ? "message me" : "message"}
            >
              {message.body}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type your message here..."
            onChange={handleChange}
            value={messageBody}
          />
          <button onClick={handleSubmit}> 제출 </button>
        </form>
      </div>
    </div>
  );
}

export default Chatting;
